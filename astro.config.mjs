// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Playfair Display",
      cssVariable: "--font-header",
      weights: [400, 500, 600, 700],
      display: "block",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Roboto",
      cssVariable: "--font-body",
      display: "block",
    },
  ],
  integrations: [icon()],
});
