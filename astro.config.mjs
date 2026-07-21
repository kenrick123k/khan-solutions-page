// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://khan-solutions.com',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ['khan-solutions.com'],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
