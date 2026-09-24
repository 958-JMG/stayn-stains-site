// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.domaine-les-aromes.fr',
  output: 'static',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      en: 'fr',
    },
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: { fr: 'fr-FR', en: 'en-US' },
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  // Astro 7 compresse par défaut selon les règles JSX ('jsx') et colle des mots :
  // true = la compression sans perte d'Astro 6.
  compressHTML: true,
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
