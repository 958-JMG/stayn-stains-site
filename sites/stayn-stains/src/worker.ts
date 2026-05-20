/**
 * Cloudflare Worker — entrypoint stayn-stains.fr
 *
 * Routes dynamiques :
 *   POST /api/lead → proxy vers le webhook n8n (qui dispatch vers Gmail
 *   + Google Sheets). Le proxy serveur évite les blocages cross-origin
 *   des extensions navigateur (Brave Shields, uBlock strict…) qui
 *   filtrent souvent les domaines n8n.cloud.
 *
 * Tout le reste → binding ASSETS (fichiers statiques dans ./dist).
 */

export interface Env {
  ASSETS: Fetcher;
  N8N_WEBHOOK_URL?: string;
}

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/lead') {
      return handleLead(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleLead(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { allow: 'POST', 'content-type': 'text/plain' },
    });
  }

  const webhook = env.N8N_WEBHOOK_URL;
  if (!webhook) {
    return json({ error: 'webhook_not_configured' }, 500);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  // Validation minimale côté serveur — le worker reste léger,
  // n8n garde la main sur la logique métier.
  const required = ['nom', 'email', 'telephone', 'consent_sms', 'consent_rgpd'];
  for (const field of required) {
    if (payload[field] === undefined || payload[field] === '' || payload[field] === false) {
      return json({ error: 'missing_field', field }, 400);
    }
  }
  if (typeof payload.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return json({ error: 'invalid_email' }, 400);
  }

  // Traçabilité — n8n peut logger ces métadonnées dans Sheets.
  const enriched = {
    ...payload,
    _proxied_at: new Date().toISOString(),
    _origin: request.headers.get('origin') || 'unknown',
    _referer: request.headers.get('referer') || 'unknown',
    _cf_ray: request.headers.get('cf-ray') || undefined,
    _country: request.headers.get('cf-ipcountry') || undefined,
    _ua: request.headers.get('user-agent') || undefined,
  };

  let upstream: Response;
  try {
    upstream = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(enriched),
    });
  } catch (e) {
    return json({ error: 'upstream_fetch_failed', message: (e as Error).message }, 502);
  }

  const text = await upstream.text();
  return new Response(text || '{"ok":true}', {
    status: upstream.status,
    headers: {
      'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function json(obj: unknown, status = 200): Response {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
