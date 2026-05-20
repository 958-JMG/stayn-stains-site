#!/usr/bin/env bash
# ============================================================
# Stay'n Stains — Setup automatisé du repo GitHub
# ============================================================
# Usage : depuis clients/stayn-stains/site/
#   bash deploy/setup.sh
#
# Ce script :
#   1. Vérifie/installe gh CLI (Homebrew)
#   2. Lance l'auth GitHub si pas déjà fait
#   3. Crée le repo "958-JMG/stayn-stains-site" privé
#   4. Pousse le code
#
# Tu n'as qu'une seule chose à faire : taper "Y" à l'auth GitHub
# (le navigateur s'ouvre automatiquement, tu valides, c'est fini).
# ============================================================

set -e

REPO_NAME="${REPO_NAME:-stayn-stains-site}"
REPO_OWNER="${REPO_OWNER:-958-JMG}"
REPO_VISIBILITY="${REPO_VISIBILITY:-private}"

cd "$(dirname "$0")/.."

echo "──────────────────────────────────────────"
echo "  Stay'n Stains — Setup repo GitHub"
echo "──────────────────────────────────────────"
echo "  Repo cible : ${REPO_OWNER}/${REPO_NAME} (${REPO_VISIBILITY})"
echo ""

# 1. gh CLI dispo ?
if ! command -v gh &> /dev/null; then
  echo "→ gh CLI absent, installation via Homebrew…"
  if ! command -v brew &> /dev/null; then
    echo "✗ Homebrew non installé. Installe-le : https://brew.sh"
    exit 1
  fi
  brew install gh
fi

# 2. Auth GitHub
if ! gh auth status &> /dev/null; then
  echo "→ GitHub non authentifié, lancement de gh auth login…"
  echo "  (le navigateur va s'ouvrir, tape Y puis valide)"
  echo ""
  gh auth login --git-protocol https --web
fi

GH_USER=$(gh api user --jq .login)
echo "✓ Authentifié comme : ${GH_USER}"

# Si REPO_OWNER est différent de l'utilisateur courant, vérifier qu'il a les droits
if [ "${REPO_OWNER}" != "${GH_USER}" ]; then
  if ! gh api "users/${REPO_OWNER}" &> /dev/null && ! gh api "orgs/${REPO_OWNER}" &> /dev/null; then
    echo "⚠ ${REPO_OWNER} introuvable. Bascule sur ${GH_USER}."
    REPO_OWNER="${GH_USER}"
  fi
fi

FULL_REPO="${REPO_OWNER}/${REPO_NAME}"

# 3. Init git si pas déjà fait
if [ ! -d .git ]; then
  echo "→ git init…"
  git init -b main
fi

# 4. Premier commit si pas encore commité
if ! git rev-parse HEAD &> /dev/null; then
  echo "→ premier commit…"
  git add .
  git commit -m "feat: initial Stay'n Stains site (CD Link · spring offer · i18n FR/EN/AR)"
fi

# 5. Création du repo + push (gh repo create gère tout)
if gh repo view "${FULL_REPO}" &> /dev/null; then
  echo "✓ Repo ${FULL_REPO} déjà existant"
  if ! git remote get-url origin &> /dev/null; then
    git remote add origin "https://github.com/${FULL_REPO}.git"
  fi
  echo "→ push…"
  git push -u origin main
else
  echo "→ création du repo ${FULL_REPO} + push…"
  gh repo create "${FULL_REPO}" \
    --"${REPO_VISIBILITY}" \
    --source=. \
    --remote=origin \
    --push
fi

echo ""
echo "──────────────────────────────────────────"
echo "  ✓ Repo en ligne : https://github.com/${FULL_REPO}"
echo "──────────────────────────────────────────"
echo ""
echo "  ÉTAPE SUIVANTE — Cloudflare Pages (3 min)"
echo ""
echo "  1. Ouvre : https://dash.cloudflare.com/?to=/:account/pages/new"
echo "  2. Connect to Git → autoriser GitHub → choisir ${FULL_REPO}"
echo "  3. Build config :"
echo "       Framework preset    : Astro"
echo "       Build command       : npm install && npm run build"
echo "       Build output dir    : dist"
echo "       Node version        : 22 (env var NODE_VERSION=22)"
echo "  4. Environment variables :"
echo "       PUBLIC_GOOGLE_MAPS_KEY = (la clé du fichier .env local)"
echo "  5. Save and Deploy"
echo ""
echo "  → URL preview disponible en ~1 min : https://${REPO_NAME}.pages.dev"
echo ""
