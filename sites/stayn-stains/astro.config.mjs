// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.stayn-stains.fr',
  output: 'static',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      en: 'fr',
      ar: 'fr',
    },
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: { fr: 'fr-FR', en: 'en-US', ar: 'ar' },
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
