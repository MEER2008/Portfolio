import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import vercel from '@astrojs/vercel/static';
import vercel from '@astrojs/vercel/edge';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    imageService: false
  }),
  integrations: [svelte(), tailwind()]
});