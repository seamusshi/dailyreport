import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://seamusshi.github.io',
  base: '/dailyreport',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
