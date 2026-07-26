// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://khan-solutions.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
        },
      },
      serialize(item) {
        // Add lastmod to all URLs for better crawl scheduling
        return { ...item, lastmod: new Date().toISOString().split('T')[0] };
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: { es: 'en', pt: 'en' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ['khan-solutions.com'],
  },
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
