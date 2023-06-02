import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  experimental: {
    assets: true
   },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  })]
});