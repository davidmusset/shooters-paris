// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/content/site';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: {
    // Images are optimised at build time (sharp) into responsive WebP.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: { prefetchAll: true },
});
