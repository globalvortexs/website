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
      layout: {
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#EBF5FF",
              100: "#D6EBFF",
              200: "#ADD6FF",
              300: "#85C2FF",
              400: "#5CADFF",
              500: "#3399FF",
              600: "#2A7ACC",
              700: "#205C99",
              800: "#153D66",
              900: "#0A1F33",
              DEFAULT: "#3399FF",
              foreground: "#FFFFFF"
            },
          }
        }
      }
    })
  ],
};