/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#013B29", // Green
          light: "#3C7F65", // Lighter green variant
          dark: "#002619", // Darker green variant
        },
        secondary: {
          DEFAULT: "#966145", // Warm brown
          light: "#C28F7C", // Lighter brown variant
          dark: "#663D29", // Darker brown variant
        },
        accent: {
          yellow: {
            DEFAULT: "#FED152", // Yellow
            light: "#FFE066", // Lightened yellow
            dark: "#D1B34D", // Darkened yellow
          },
          green: {
            DEFAULT: "#A0DE6F", // Green
            light: "#B5E68C", // Lightened green
            dark: "#74B857", // Darkened green
          },
          purple: {
            DEFAULT: "#9A64C7", // Purple
            light: "#C797E8", // Lightened purple
            dark: "#6B479A", // Darkened purple
          },
          orange: {
            DEFAULT: "#FF844B", // Orange
            light: "#FFA778", // Lightened orange
            dark: "#C75A31", // Darkened orange
          },
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
