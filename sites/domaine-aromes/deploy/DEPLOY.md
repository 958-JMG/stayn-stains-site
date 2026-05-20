# Déployer domaine-les-aromes.fr — Cloudflare Workers + n8n

Même stack que `sites/stayn-stains` (voir [`../../stayn-stains/deploy/DEPLOY.md`](../../stayn-stains/deploy/DEPLOY.md) pour la procédure détaillée). Ce document liste **uniquement** ce qui change pour ce second site.

## Différences vs stayn-stains

| Brique | Valeur domaine-aromes |
|---|---|
| Domaine | `domaine-les-aromes.fr` |
| Worker name (`wrangler.jsonc`) | `domaine-aromes-site` |
| Webhook n8n | **à créer** (voir §1) |
| Google Sheet leads | **à créer** (voir §1) |
| Bureau de vente | 15 route de Galluis, 78490 Méré · 06 40 74 24 72 |
| Plausible domain | `domaine-les-aromes.fr` |

## 1. Workflow n8n dédié

Dupliquer le workflow `sites/stayn-stains/deploy/n8n-stayn-form.json` dans n8n :

1. **Workflows → Add → Import from File** → choisir `n8n-stayn-form.json`
2. Renommer le webhook path : `stayn-stains-lead` → `domaine-aromes-lead`
3. Créer un **nouveau Google Sheet** "Leads Domaine Les Arômes" avec les mêmes colonnes d'en-tête (Date, Prénom, Nom, Email, Téléphone, Type de logement, Projet, Consent SMS, Consent RGPD, Source, Origin, Pays, User-Agent)
4. Connecter le node Google Sheets sur ce nouveau sheet
5. Ajuster le node Gmail : sujet `[Domaine Les Arômes] Nouveau lead — {{nom}} {{prenom}}`
6. Activer le workflow → copier la Production URL → coller dans `wrangler.jsonc` → `vars.N8N_WEBHOOK_URL`

## 2. Cloudflare Worker

```bash
cd sites/domaine-aromes
npm install
npm run build
npx wrangler deploy
```

Premier deploy → URL `domaine-aromes-site.<account>.workers.dev`.

## 3. Custom domain

Dashboard Cloudflare → Workers & Pages → `domaine-aromes-site` → **Settings → Triggers → Add Custom Domain** :

- `www.domaine-les-aromes.fr`
- `domaine-les-aromes.fr` (apex)

Préalable : la zone DNS `domaine-les-aromes.fr` doit pointer ses nameservers vers Cloudflare (cf. §4 du DEPLOY stayn-stains).

Ajouter une **Redirect Rule** apex → www (cf. §4.3 du DEPLOY stayn-stains, remplacer le nom de domaine).

## 4. Vérifications post-déploiement

- [ ] `https://www.domaine-les-aromes.fr` → SSL vert, site en ligne, palette olive
- [ ] UrgencyBar avec compteur live qui décrémente
- [ ] Lang switcher FR/EN visible (pas d'AR)
- [ ] Formulaire envoie un lead → email reçu + ligne ajoutée dans le **bon** Sheet (pas celui de stayn !)
- [ ] `/mentions-legales` → SCCV 15 GALLUIS, juridiction Tribunal de Versailles
- [ ] Sitemap `https://www.domaine-les-aromes.fr/sitemap-index.xml`
- [ ] Plausible enregistre les visites sur le bon site

## 5. Google Maps key (optionnel)

`PUBLIC_GOOGLE_MAPS_KEY` est vide par défaut — la carte utilise Leaflet + OpenStreetMap (CartoDB tiles) et n'a pas besoin de clé. Ne renseigner cette variable que si vous souhaitez basculer vers Google Maps.

## 6. Choses à compléter par les opérateurs

Le code livré contient des **valeurs placeholder** à confirmer avant mise en ligne :

- Caractéristiques du dernier lot dans `src/components/HomeContent.astro` (lignes `const apparts = [...]`)
  - Type, surface, prix initial, prix actuel, numéro de lot
- Coordonnées exactes des POI dans `src/components/MapPOI.astro` (relevées à grosse maille)
- Date limite de l'offre dans `src/components/HomeContent.astro` (`deadline` par défaut : 2026-06-15)
- Email de contact `contact@domaine-les-aromes.fr` (créer la boîte ou rediriger vers une existante)
- Visuels haute déf : remplacer `src/assets/face.jpg`, `interieur.jpg`, `terrasse.jpg` par les vraies photos du programme, puis relancer `node scripts/generate-assets.mjs`
