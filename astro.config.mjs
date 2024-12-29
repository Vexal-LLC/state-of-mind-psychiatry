// @ts-check
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import icon from "astro-icon";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    mdx(),
    storyblok({
      accessToken: env.STORYBLOK_ACCESS_TOKEN,
      components: {},
      apiOptions: {
        region: "us",
      },
    }),
    icon(),
  ],

  adapter: vercel(),
});
