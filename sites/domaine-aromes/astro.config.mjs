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
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
