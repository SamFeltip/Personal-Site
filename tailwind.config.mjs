import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        roboto: ['"Roboto"', "serif"],
      },
      keyframes: {
        show: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        show: "show 0.5s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssMotion],
};
