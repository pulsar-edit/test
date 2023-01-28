import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { SITE } from './src/config';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), svelte(), prefetch()],
  server: {
    host: '0.0.0.0'
  },
  site: SITE.url
});