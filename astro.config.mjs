// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zurhaartools.com',
  integrations: [
    sitemap({
      // success (shows license keys) and recover are utility pages, not search targets
      filter: (page) => !page.includes('/success') && !page.includes('/recover'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});