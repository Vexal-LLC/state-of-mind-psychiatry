import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

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
            DEFAULT: "#FFD86F", // Yellow
            light: "#FFE899", // Lightened yellow
            dark: "#FACC14", // Darkened yellow
          },
          green: {
            DEFAULT: "#B3F57A", // Green
            light: "#C9FE85", // Lightened green
            dark: "#8EDB63", // Darkened green
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
          brown: {
            DEFAULT: "#966145", // Warm brown
            light: "#C28F7C", // Lighter brown variant
            dark: "#48382D", // Darker brown variant
          },
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F8F5F1", // Light beige
          300: "#F6F0E8",
          800: "#2C2C2C",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Vollkorn", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".highlight": {
          position: "relative",
          display: "inline-block",
          padding: "0 6px",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "calc(100% + 4px)",
            left: "-2px",
            bottom: "0",
            transform: "rotate(0deg)",
          },
        },
        ".highlight-behind": {
          "&::before": {
            zIndex: "-1",
          },
        },
        ".highlight-front": {
          "&::before": {
            zIndex: "10",
          },
        },
        ".highlight-bottom": {
          "&::before": {
            bottom: "0",
          },
        },
        ".highlight-center": {
          "&::before": {
            bottom: "50%",
            transform: "translateY(50%)",
          },
        },
        ".highlight-top": {
          "&::before": {
            bottom: "auto",
            top: "0",
          },
        },
        ".highlight-rotate-0": {
          "&::before": {
            transform: "rotate(0deg) !important",
          },
        },
        ".highlight-rotate-5": {
          "&::before": {
            transform: "rotate(5deg) !important",
          },
        },
        ".highlight-rotate-15": {
          "&::before": {
            transform: "rotate(15deg) !important",
          },
        },
        ".highlight-rotate-30": {
          "&::before": {
            transform: "rotate(30deg) !important",
          },
        },
        ".highlight-rotate-45": {
          "&::before": {
            transform: "rotate(45deg) !important",
          },
        },
        ".highlight-rotate-60": {
          "&::before": {
            transform: "rotate(60deg) !important",
          },
        },
        ".highlight-rotate-75": {
          "&::before": {
            transform: "rotate(75deg) !important",
          },
        },
        ".highlight-rotate-90": {
          "&::before": {
            transform: "rotate(90deg) !important",
          },
        },
        ".highlight-rotate-105": {
          "&::before": {
            transform: "rotate(105deg) !important",
          },
        },
        ".highlight-rotate-120": {
          "&::before": {
            transform: "rotate(120deg) !important",
          },
        },
        ".highlight-rotate-135": {
          "&::before": {
            transform: "rotate(135deg) !important",
          },
        },
        ".highlight-rotate-150": {
          "&::before": {
            transform: "rotate(150deg) !important",
          },
        },
        ".highlight-rotate-165": {
          "&::before": {
            transform: "rotate(165deg) !important",
          },
        },
        ".highlight-rotate-180": {
          "&::before": {
            transform: "rotate(180deg) !important",
          },
        },
        ".highlight-rounded-none": {
          "&::before": {
            borderRadius: "0",
          },
        },
        ".highlight-rounded-sm": {
          "&::before": {
            borderRadius: "0.125rem",
          },
        },
        ".highlight-rounded": {
          "&::before": {
            borderRadius: "0.25rem",
          },
        },
        ".highlight-rounded-md": {
          "&::before": {
            borderRadius: "0.375rem",
          },
        },
        ".highlight-rounded-lg": {
          "&::before": {
            borderRadius: "0.5rem",
          },
        },
        ".highlight-rounded-full": {
          "&::before": {
            borderRadius: "9999px",
          },
        },
        ".highlight-h-full": {
          "&::before": {
            height: "100%",
          },
        },
        ".highlight-h-10": {
          "&::before": {
            height: "10%",
          },
        },
        ".highlight-h-20": {
          "&::before": {
            height: "20%",
          },
        },
        ".highlight-h-30": {
          "&::before": {
            height: "30%",
          },
        },
        ".highlight-h-40": {
          "&::before": {
            height: "40%",
          },
        },
        ".highlight-h-50": {
          "&::before": {
            height: "50%",
          },
        },
        ".highlight-h-60": {
          "&::before": {
            height: "60%",
          },
        },
        ".highlight-h-70": {
          "&::before": {
            height: "70%",
          },
        },
        ".highlight-h-80": {
          "&::before": {
            height: "80%",
          },
        },
        ".highlight-h-90": {
          "&::before": {
            height: "90%",
          },
        },
        ".highlight-h-100": {
          "&::before": {
            height: "100%",
          },
        },
        ".highlight-opacity-10": {
          "&::before": {
            opacity: "0.1",
          },
        },
        ".highlight-opacity-20": {
          "&::before": {
            opacity: "0.2",
          },
        },
        ".highlight-opacity-30": {
          "&::before": {
            opacity: "0.3",
          },
        },
        ".highlight-opacity-40": {
          "&::before": {
            opacity: "0.4",
          },
        },
        ".highlight-opacity-50": {
          "&::before": {
            opacity: "0.5",
          },
        },
        ".highlight-opacity-60": {
          "&::before": {
            opacity: "0.6",
          },
        },
        ".highlight-opacity-70": {
          "&::before": {
            opacity: "0.7",
          },
        },
        ".highlight-opacity-80": {
          "&::before": {
            opacity: "0.8",
          },
        },
        ".highlight-opacity-90": {
          "&::before": {
            opacity: "0.9",
          },
        },
        ".highlight-opacity-100": {
          "&::before": {
            opacity: "1",
          },
        },
        ".highlight-primary": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.primary.DEFAULT"),
          },
        },
        ".highlight-primary-light": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.primary.light"),
          },
        },
        ".highlight-primary-dark": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.primary.dark"),
          },
        },
        ".highlight-secondary": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.secondary.DEFAULT"),
          },
        },
        ".highlight-secondary-light": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.secondary.light"),
          },
        },
        ".highlight-secondary-dark": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.secondary.dark"),
          },
        },
        ".highlight-accent-orange": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.accent.orange.DEFAULT"),
          },
        },
        ".highlight-accent-yellow": {
          "@apply highlight": {},
          "&::before": {
            backgroundColor: theme("colors.accent.yellow.DEFAULT"),
          },
        },
      });
    }),
  ],
};
