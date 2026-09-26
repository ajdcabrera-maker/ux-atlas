import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Planned host: atlas.aarondesign.rocks (sibling worker of aarondesign.rocks).
export default defineConfig({
  site: 'https://atlas.aarondesign.rocks',
  devToolbar: {
    enabled: false,
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
