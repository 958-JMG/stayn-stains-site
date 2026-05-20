# stayn-stains-site

Site vitrine du programme immo **Stay'n** (CD Link) — 58 logements neufs à Stains (93).

## Stack

- **Astro 6** (output statique) + **Tailwind 4**
- **Cloudflare Workers + Assets** (binding `ASSETS` sur `dist/`)
- Worker `/api/lead` proxy → **n8n** (Gmail + Google Sheets)
- **Plausible** analytics (cookieless, EU)
- Fonts : Fraunces (display) + Geist (sans)

Pattern identique à `958-site` (cohérence cross-projets 9·58).

## Quickstart

```bash
npm install
npm run dev                # http://localhost:4321
npm run build              # → dist/
npm run wrangler:dev       # test du worker en local
npm run wrangler:deploy    # deploy CF Workers
```

Pour régénérer favicons + og-image après changement de logo ou photo :

```bash
node scripts/generate-assets.mjs
```

## Arborescence

```
public/             → assets statiques (favicon, logo, og-image, robots)
src/
  assets/           → images optimisées au build par Astro Image
  components/       → Header, Footer, LeadForm
  layouts/Base.astro
  pages/            → index, mentions-legales, merci, 404
  styles/global.css → design system (variables CSS)
  worker.ts         → Cloudflare Worker (POST /api/lead)
deploy/
  DEPLOY.md         → recette CF Pages + DNS Squarespace → Cloudflare
  n8n-stayn-form.json → workflow n8n à importer (Gmail + Sheets)
scripts/
  generate-assets.mjs → favicons + og-image via sharp
wrangler.jsonc      → config Cloudflare Workers
```

## Design system (handoff)

Toutes les valeurs sont des CSS custom properties exposées dans `src/styles/global.css` (`:root`).

### Palette

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#FBF8F4` | Papier crème, fond global |
| `--bg-2` | `#FFFFFF` | Surfaces neutres (cards, form) |
| `--bg-3` | `#F2EDE5` | Surface chaude (section "intérieur") |
| `--bg-4` | `#2D1B1D` | Sombre brun rouge (footer) |
| `--ink` | `#2E1A1C` | Encre titres |
| `--ink-2` | `#4D2A2D` | Corps de texte |
| `--ink-3` | `#8A6E6F` | Meta / caption |
| `--accent` | `#A23538` | Bordeaux (étoile logo) — CTAs primaires |
| `--accent-2` | `#862C2F` | Bordeaux foncé hover |
| `--cream` | `#F0E2C8` | Crème chaud — accents sur fond sombre |
| `--signal` | `#C2451E` | Erreurs formulaire, urgence |

### Typo

- **Display** : `Fraunces Variable` (h1-h4, italics expressives)
- **Sans** : `Geist Variable` (corps, UI)
- **Mono** : `Geist Mono Variable` (eyebrows, caption, KPIs)

Échelle modular 1.25 — `--step--1` (13px) à `--step-8` (clamp hero ~88px).

### Layout

- Containers `narrow` (640) / `default` (920) / `wide` (1200) / `xl` (1400)
- 8-pt grid (`--s-1` à `--s-10`)
- Gutter responsive `clamp(1.25rem, 3.5vw, 2.5rem)`

### Composants UI

`.btn` (primary / ghost / cream / lg / sm / block), `.card`, `.eyebrow`, `.lead`, `.link-arrow`, `.form-field`, `.form-checkbox`, `.form-status`, `.skip-link`, `.reveal` (scroll-reveal IO-based).

### Accessibility

- Skip-link, focus visible (outline accent + offset 3px), touch targets ≥ 44 px
- Form fields associés (`for`/`id`), validation aria-friendly, status `role="status" aria-live="polite"`
- ARIA labels sur tous les boutons icône (téléphone, menu mobile)
- Honeypot `<input name="company">` anti-spam
- `prefers-reduced-motion` respecté (animations désactivées)

## Pipeline formulaire

```
Browser → POST /api/lead (Cloudflare Worker)
       ↓
       n8n webhook (stayn-stains-lead)
       ↓ ┌──→ Gmail · jmg@958.fr + contact@ozimmo.fr
         └──→ Google Sheets · 1bPoUPCXUDBOv_KlMDvIQmvudI5_yfXUZDUvwFI052nM
```

Le worker valide les champs requis + email regex + honeypot avant de proxy.
n8n garde la main sur la logique métier (templating mail, mapping colonnes Sheets).

## Déploiement

Voir [`deploy/DEPLOY.md`](./deploy/DEPLOY.md).

Résumé : push GitHub → Cloudflare Pages build auto + bascule DNS Squarespace → Cloudflare (option NS, registrar conservé).

## Liens utiles

- Site actuel à remplacer : <https://www.stayn-stains.fr> (Squarespace)
- Workflow n8n : <https://jmg958.app.n8n.cloud>
- Google Sheet leads : <https://docs.google.com/spreadsheets/d/1bPoUPCXUDBOv_KlMDvIQmvudI5_yfXUZDUvwFI052nM>
- Promoteur : CD LINK Promotion
- Commercialisation : Ozimmo (`contact@ozimmo.fr` · 07 63 27 78 78)
