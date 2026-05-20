# domaine-aromes-site

Site vitrine du programme immo **Domaine Les Arômes** (SCCV 15 GALLUIS) — programme neuf à Méré (78), aux portes de Montfort-l'Amaury. Ne reste qu'un seul appartement à vendre — c'est ce que ce site met en avant.

Sister-site de [`../stayn-stains`](../stayn-stains/) : même stack Astro + CF Workers, palette nature olive/sauge au lieu du bordeaux, FR + EN uniquement.

## Stack

- **Astro 6** (output statique) + **Tailwind 4**
- **Cloudflare Workers + Assets** (binding `ASSETS` sur `dist/`)
- Worker `/api/lead` proxy → **n8n** (Gmail + Google Sheets)
- **Plausible** analytics (cookieless, EU)
- Fonts : Fraunces (display) + Geist (sans)

## Quickstart

```bash
npm install
npm run dev                # http://localhost:4321
npm run build              # → dist/
npm run wrangler:dev       # test du worker en local
npm run wrangler:deploy    # deploy CF Workers
```

Régénération des favicons + og-image après changement de logo SVG ou de photo :

```bash
node scripts/generate-assets.mjs
```

## Contenu à compléter

Le site est livré avec des **valeurs placeholder** pour le dernier lot. À éditer avant mise en ligne :

- `src/components/HomeContent.astro` (ligne `const apparts = [...]`) — type, surface, prix, lot du dernier appartement
- `src/components/HomeContent.astro` (prop `deadline`) — date limite de l'offre
- `src/components/MapPOI.astro` — coordonnées exactes des POI Méré / Montfort-l'Amaury
- `src/assets/face.jpg` / `interieur.jpg` / `terrasse.jpg` — remplacer par les vraies photos du programme (puis `node scripts/generate-assets.mjs`)
- `wrangler.jsonc` → `N8N_WEBHOOK_URL` une fois le workflow n8n dédié créé

## Design system

Palette héritée du design system commun (cf. `src/styles/global.css :root`), réaccordée en **vert olive / sauge** :

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#F7F4ED` | Sable crème, fond global |
| `--bg-2` | `#FFFFFF` | Surfaces neutres |
| `--bg-3` | `#EFEADC` | Surface chaude |
| `--bg-4` | `#2A2E25` | Vert très sombre (footer) |
| `--ink` | `#2A2E25` | Encre titres |
| `--ink-2` | `#3F4636` | Corps de texte |
| `--ink-3` | `#6E7563` | Meta / caption |
| `--accent` | `#5C6B3F` | Vert olive — CTAs primaires |
| `--accent-2` | `#3F4A2A` | Vert sauge sombre — hover |
| `--cream` | `#E8E4D4` | Sable chaud — accents sur fond sombre |
| `--signal` | `#B5651D` | Erreurs formulaire, urgence (terre cuite) |

Typo + layout + composants UI identiques à `sites/stayn-stains` — voir son README pour le détail.

## Pipeline formulaire

```
Browser → POST /api/lead (Cloudflare Worker)
       ↓
       n8n webhook (domaine-aromes-lead)  ← à créer
       ↓ ┌──→ Gmail · contact@domaine-les-aromes.fr
         └──→ Google Sheets · "Leads Domaine Les Arômes" ← à créer
```

## Déploiement

Voir [`deploy/DEPLOY.md`](./deploy/DEPLOY.md).
