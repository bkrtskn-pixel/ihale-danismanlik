// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL, BASE_PATH } from './site.config.mjs';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  // GitHub Pages dizin bazlı yayın yapar: /hizmetler/ → /hizmetler/index.html
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
