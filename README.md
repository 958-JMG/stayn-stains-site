# 958-JMG sites monorepo

Monorepo qui héberge deux sites vitrines immo, partageant la même architecture (Astro + Tailwind + Cloudflare Workers + n8n) :

| Site | Dossier | Domaine |
|---|---|---|
| **Stay'n Stains** | [`sites/stayn-stains`](./sites/stayn-stains) | [stayn-stains.fr](https://www.stayn-stains.fr) |
| **Domaine Les Arômes** | [`sites/domaine-aromes`](./sites/domaine-aromes) | [domaine-les-aromes.fr](https://www.domaine-les-aromes.fr) (à brancher) |

Chaque site est un projet Astro autonome avec son propre `package.json`, `astro.config.mjs`, `wrangler.jsonc` et déploiement Cloudflare indépendant. Les composants sont **copiés-adaptés** entre les deux (pas de package shared) — c'est plus lisible et résilient pour ce volume.

## Dev

```bash
# Stay'n Stains
cd sites/stayn-stains
npm install
npm run dev                # http://localhost:4321

# Domaine Les Arômes
cd sites/domaine-aromes
npm install
npm run dev                # http://localhost:4321 (un seul site à la fois)
```

## Build

```bash
cd sites/<site>
npm run build              # → dist/
npm run wrangler:deploy    # deploy Cloudflare Workers
```

## Déploiement

Chaque site a son propre `deploy/DEPLOY.md` :

- [`sites/stayn-stains/deploy/DEPLOY.md`](./sites/stayn-stains/deploy/DEPLOY.md) — procédure complète (CF Pages + DNS + n8n)
- [`sites/domaine-aromes/deploy/DEPLOY.md`](./sites/domaine-aromes/deploy/DEPLOY.md) — différences vs stayn (renvoi vers DEPLOY.md de stayn pour le reste)

### ⚠ Migration Cloudflare Pages — root directory

Si la **production stayn-stains** est déployée via Cloudflare Pages avec un build à la racine du repo, il faut mettre à jour la config :

1. Dashboard Cloudflare → **Workers & Pages** → `stayn-stains-site` → **Settings** → **Build & deployments**
2. **Root directory** : changer de `(vide)` vers `sites/stayn-stains`
3. Relancer un deploy pour vérifier

Sans cette modif, le prochain build CF Pages échouera (il ne trouvera plus `package.json` à la racine).

## Stack partagée

- Astro 6 + Tailwind 4 + Fraunces/Geist
- Cloudflare Workers (binding ASSETS) + n8n (Gmail + Google Sheets)
- Plausible analytics
- Sharp pour favicons / og-image (`scripts/generate-assets.mjs`)
