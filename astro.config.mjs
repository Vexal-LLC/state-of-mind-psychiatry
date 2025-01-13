// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import icon from "astro-icon";

import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    icon(),
    robots(),
  ],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
