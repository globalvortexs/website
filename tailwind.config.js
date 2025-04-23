import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#eef2ff",
              100: "#e0e7ff",
              200: "#c7d2fe",
              300: "#a5b4fc",
              400: "#818cf8",
              500: "#6366f1",
              600: "#4f46e5",
              700: "#4338ca",
              800: "#3730a3",
              900: "#312e81",
              DEFAULT: "#4f46e5",
              foreground: "#ffffff"
            },
          }
        },
        dark: {
          colors: {
            primary: {
              50: "#eef2ff",
              100: "#e0e7ff",
              200: "#c7d2fe",
              300: "#a5b4fc",
              400: "#818cf8",
              500: "#6366f1",
              600: "#4f46e5",
              700: "#4338ca",
              800: "#3730a3",
              900: "#312e81",
              DEFAULT: "#6366f1",
              foreground: "#ffffff"
            },
            background: {
              DEFAULT: "#0F1115"
            },
            content1: {
              DEFAULT: "#161920",
              foreground: "#ECEDEE"
            },
            content2: {
              DEFAULT: "#1C2028",
              foreground: "#ECEDEE"
            }
          }
        }
      }
    })
  ],
};
