import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const SITE_URL = process.env.SITE_URL || 'https://app-compare.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), tailwind()],
  output: 'static',
});
