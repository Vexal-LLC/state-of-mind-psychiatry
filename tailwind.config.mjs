/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003B29", // Dark green
          light: "#2A5B52", // Lighter green variant
        },
        secondary: {
          DEFAULT: "#966145", // Warm brown
          light: "#C28F7C", // Lighter brown variant
        },
        accent: {
          yellow: "#D4B32E", // Darkened yellow
          green: "#7DA06D", // Darkened green
          purple: "#9A64C7", // Darkened purple
          orange: "#E66E32", // Darkened orange
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F8F5F1", // Light beige
          300: "#E5E5E5",
          800: "#2C2C2C",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        display: ["Vollkorn", "serif"],
      },
    },
  },
  plugins: [],
};
