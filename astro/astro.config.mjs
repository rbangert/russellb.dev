import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://russellb.dev',
  output: "server", // or 'server'
  experimental: {
    actions: true,
  },
  // Enable many frameworks to support all different kinds of components.
  // No `include` is needed if you are only using a single JSX framework!
  integrations: [tailwind({
    applyBaseStyles: true
  }), react({
    include: ['**/react/*']
  }), mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })]
});