# Déployer stayn-stains.fr — Cloudflare Pages + n8n + Google Sheets

Stack identique à 958.fr, adaptée pour un programme immo CD Link.

| Brique | Choix |
|---|---|
| Code | GitHub (à créer : `958-JMG/stayn-stains-site` ou monorepo Cockpit 958) |
| Build | Astro 6 + Tailwind 4 (statique) |
| Hébergement | Cloudflare Pages (gratuit, CDN mondial) |
| Worker | `/api/lead` proxy → n8n (évite blocages cross-origin) |
| Backend formulaire | n8n (Gmail + Google Sheets) |
| Analytics | Plausible (cookieless, EU) |
| DNS | Cloudflare (basculé depuis Squarespace) |

Temps total : **~25 min** pour le premier setup, **0 min** pour les push suivants.

---

## 1. Importer le workflow n8n (3 min)

### 1.1 Import

Console n8n ([jmg958.app.n8n.cloud](https://jmg958.app.n8n.cloud)) :

1. **Workflows** → **Add workflow** → menu **⋯** → **Import from File**
2. Sélectionner [`deploy/n8n-stayn-form.json`](./n8n-stayn-form.json)
3. Ctrl+S

### 1.2 Brancher les credentials

- **Google Sheets · append** : sélectionner ton compte Google (OAuth2). Le `documentId` est déjà câblé sur le sheet `1bPoUPCXUDBOv_KlMDvIQmvudI5_yfXUZDUvwFI052nM`. Vérifier que la feuille s'appelle `Feuille1` (sinon ajuster).
- **Gmail · notify** : sélectionner le compte Gmail jmg@958.fr (déjà configuré côté n8n).

### 1.3 Préparer le Google Sheet

Dans le sheet `1bPoUPCXUDBOv_KlMDvIQmvudI5_yfXUZDUvwFI052nM`, créer la ligne d'en-tête (ligne 1) :

```
Date | Prénom | Nom | Email | Téléphone | Type de logement | Projet | Consent SMS | Consent RGPD | Source | Origin | Pays | User-Agent
```

### 1.4 Activer + récupérer l'URL webhook

- Toggle **Active** en haut à droite
- Copier la **Production URL** du node Webhook : `https://jmg958.app.n8n.cloud/webhook/stayn-stains-lead`
- Vérifier qu'elle correspond bien à la valeur dans `wrangler.jsonc` → `vars.N8N_WEBHOOK_URL`

### 1.5 Test depuis n8n

Bouton **Execute workflow** → onglet "Test URL" → POST manuel avec un payload :

```json
{
  "prenom": "Test",
  "nom": "Lead",
  "email": "test@example.com",
  "telephone": "0612345678",
  "type_logement": "T3",
  "projet": "Test ligne",
  "consent_sms": true,
  "consent_rgpd": true,
  "source": "manual-test"
}
```

Vérifier : ligne ajoutée dans le sheet + email reçu sur jmg@958.fr.

---

## 2. Pousser le repo sur GitHub (3 min)

```bash
cd "clients/stayn-stains/site"
git init
git add .
git commit -m "feat: initial Stay'n Stains site (Astro + CF Pages)"
gh repo create 958-JMG/stayn-stains-site --private --source=. --remote=origin --push
```

Si tu préfères garder en monorepo dans `Cockpit 958/`, le push se fait avec le repo parent. Cloudflare Pages peut pointer sur un sous-dossier (`Root directory: clients/stayn-stains/site`).

---

## 3. Créer le projet Cloudflare Pages (5 min)

1. Dashboard Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Autoriser GitHub → choisir `958-JMG/stayn-stains-site` (ou le repo monorepo)
3. Configuration build :

| Champ | Valeur |
|---|---|
| **Project name** | `stayn-stains-site` |
| **Production branch** | `main` |
| **Framework preset** | `Astro` |
| **Build command** | `npm install && npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | (vide si repo dédié) ou `clients/stayn-stains/site` (si monorepo) |

4. **Environment variables** : aucune nécessaire en plus des `vars` du `wrangler.jsonc`.

5. **Save and Deploy** → premier build ~1 min → URL `https://stayn-stains-site.pages.dev`.

Vérifier que la preview s'affiche correctement avant la bascule DNS.

---

## 4. Bascule DNS Squarespace → Cloudflare (10 min)

### 4.1 Récupérer le registrar actuel

Le domaine `stayn-stains.fr` est aujourd'hui chez **Squarespace Domains**. Deux options :

**Option A — Garder le domaine chez Squarespace, juste basculer les NS** (recommandée, rapide) :
1. Dans Cloudflare → **+ Add site** → entrer `stayn-stains.fr` → plan Free → suivant
2. CF récupère la zone DNS existante. Vérifier que rien n'est cassé (emails, vérifs).
3. CF affiche 2 nameservers à configurer côté Squarespace, du type `xxx.ns.cloudflare.com`.
4. Console Squarespace → **Domains** → `stayn-stains.fr` → **DNS Settings** → **Custom Nameservers** → entrer les 2 NS Cloudflare → Save.
5. Propagation : 1 à 24 h (souvent < 1 h). Suivre dans Cloudflare → l'icône passe au vert "Active".

**Option B — Transférer le domaine chez Cloudflare** : préparer les EPP code chez Squarespace, lancer le transfer (5-7 jours, plus propre long terme).

→ **Choisir l'option A** pour cette mise en ligne. Transfer plus tard si besoin.

### 4.2 Brancher Cloudflare Pages au domaine

Une fois la zone Cloudflare active :

1. Projet `stayn-stains-site` → onglet **Custom domains** → **Set up a custom domain**
2. Ajouter `www.stayn-stains.fr` → CF crée automatiquement le CNAME dans la zone.
3. Re-cliquer **Set up a custom domain** → ajouter `stayn-stains.fr` (apex) → CF gère le CNAME flattening (puisque CF fait autorité).
4. Attendre 1-3 min → SSL auto.

### 4.3 Redirection apex → www

Dashboard Cloudflare → zone `stayn-stains.fr` → **Rules** → **Redirect Rules** → **Create rule** :

- **Name** : Apex → www
- **When incoming requests match** : Custom filter expression
  - Hostname equals `stayn-stains.fr`
- **Then** : Static redirect, status `301`, expression :
  ```
  concat("https://www.stayn-stains.fr", http.request.uri.path)
  ```

Deploy.

### 4.4 Déployer le worker (au lieu de Pages "pur")

Comme on a un `worker.ts` qui gère `/api/lead`, il faut **déployer en mode Workers + Assets** plutôt que Pages classique :

```bash
cd "clients/stayn-stains/site"
npm install
npm run build
npx wrangler deploy
```

CF déploie le worker avec le binding ASSETS sur `dist/`. Le worker prend la priorité sur les routes dynamiques (`/api/lead`), tout le reste est servi en statique depuis le CDN.

Pour brancher le custom domain au worker : Cloudflare dashboard → **Workers & Pages** → `stayn-stains-site` → **Settings** → **Triggers** → **Add Custom Domain** → `www.stayn-stains.fr` et `stayn-stains.fr`.

> **Note** : si tu préfères du pur Pages (sans worker), il faut désactiver `worker.ts` et faire poster le formulaire directement sur le webhook n8n depuis le navigateur (le proxy worker disparaît, mais tu perds la résilience contre les ad-blockers).

---

## 5. Vérifications post-déploiement

Onglet privé :

- [ ] [https://www.stayn-stains.fr](https://www.stayn-stains.fr) → site en ligne, SSL vert
- [ ] [https://stayn-stains.fr](https://stayn-stains.fr) → 301 vers `www`
- [ ] [http://www.stayn-stains.fr](http://www.stayn-stains.fr) → 301 vers HTTPS
- [ ] Pages : `/`, `/mentions-legales`, `/merci`, route inexistante → 404 custom
- [ ] **Formulaire** : remplir + envoyer → email reçu jmg@958.fr + ligne ajoutée dans le Google Sheet + redirection `/merci`
- [ ] [https://www.stayn-stains.fr/sitemap-index.xml](https://www.stayn-stains.fr/sitemap-index.xml)
- [ ] Lighthouse mobile (Chrome DevTools) → viser **Performance ≥ 90**, **A11y ≥ 95**, **SEO ≥ 95**
- [ ] [opengraph.xyz](https://www.opengraph.xyz/url/https%3A%2F%2Fwww.stayn-stains.fr) → preview OG

---

## 6. Activer Plausible

[plausible.io](https://plausible.io) → **+ Add a website** → `stayn-stains.fr`.
Le script est déjà dans `Base.astro`. Dashboard public ou privé selon préférence.

---

## 7. Déploiements suivants (zéro clic)

```bash
git add .
git commit -m "..."
git push
```

CF rebuild + déploie. Suivi : **Workers & Pages → stayn-stains-site → Deployments**.
PR ouverte → preview URL automatique `https://<branch>.stayn-stains-site.pages.dev`.

---

## Annexes

### Rollback rapide

Squarespace toujours actif comme fallback. Si problème dans les 24h post-bascule :
1. Console Squarespace → Domains → `stayn-stains.fr` → DNS → remettre les NS originaux
2. Propagation 30 min → site Squarespace de nouveau visible

Ne pas couper le compte Squarespace avant 7 jours d'observation.

### Variables / secrets

Aucun secret applicatif côté Cloudflare. Le webhook n8n est public (le payload n'est pas sensible). Côté n8n, les credentials Gmail + Google Sheets sont stockés chiffrés.

### Anti-spam

- Honeypot `<input name="company">` caché dans le formulaire (tout remplissage = bot, réponse silencieuse)
- Validation côté worker (champs requis + email regex)
- Ajouter Cloudflare Turnstile si volume de spam élevé (gratuit, drop-in après-coup)

### Conformité RGPD

- Plausible cookieless → pas de bandeau requis
- Mentions légales + politique de données dans `/mentions-legales`
- Consent SMS + RGPD obligatoires dans le formulaire
- Conservation 18 mois côté Google Sheets (purger manuellement les anciennes lignes ou ajouter un workflow n8n cron mensuel)
