import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config: import("tailwindcss").Config = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        thin: "50", // was 100
        extralight: "150", // was 200
        light: "250", // was 300
        normal: "350", // was 400
        medium: "450", // was 500
        semibold: "550", // was 600
        bold: "600", // was 700
        extrabold: "750", // was 800
        black: "850", // was 900
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        tiny: "0.4375rem", // 7px
        xxs: "0.625rem", // 10px
        xs: "0.75rem", // 12px
        small: "0.875rem", // 14px
        medium: "0.9375rem", // 15px
        large: "1.125rem", // 18px
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "431px",
        md: "769px",
        lg: "1440px",
        xl: "1800px",
        xxl: "2550px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.45,
        radius: {
          small: "6px",
          medium: "8px",
          large: "12px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#f0f9ff", // Light sea water blue
            foreground: "#0c4a6e", // Deep ocean navy
            focus: "#f97316", // Orange focus
            primary: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316", // Vibrant Orange (Default)
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
              DEFAULT: "#f97316",
            },
            secondary: {
              50: "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#0d9488", // Deep Teal/Sea Water
              600: "#0f766e",
              700: "#115e59",
              800: "#134e4a",
              900: "#134e4a",
              DEFAULT: "#0d9488",
            },
          },
        },
        dark: {
          colors: {
            background: "#082f49", // Deep ocean blue
            foreground: "#f0f9ff", // Light sea water text
            focus: "#f97316", // Orange focus
            primary: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316", // Vibrant Orange (Default)
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
              DEFAULT: "#f97316",
            },
            secondary: {
              50: "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#0d9488", // Deep Teal/Sea Water
              600: "#0f766e",
              700: "#115e59",
              800: "#134e4a",
              900: "#134e4a",
              DEFAULT: "#0d9488",
            },
          },
        },
      },
    }),
  ],
};

export default config;
