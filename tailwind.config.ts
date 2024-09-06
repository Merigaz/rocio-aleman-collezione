import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        celxs: "375px",
        celsm: "390px",
        cel: "425px",
        tablet: "640px",

        laptop: "1440px",

        desktop: "1024px",

        desktopxl: "1690px",
      },
      keyframes: {
        growRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        }
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
        growRight: "growRight 1s ease-in-out forwards",
      },
      boxShadow: {
        "product-shadow": "0px 0px 2px 0px rgba(0, 0, 0, 0.3)",
        "card-shadow": "2px 2px 2px 0px rgba(0, 0, 0, 0.3)",
        "nav-shadow": "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
        "button-wp": "0px 0px 4px 1px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        Poly: ["Poly", "serif"],
        ButtonBuy: ["Playfair Display SC", "serif"],
        PriceCard: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        pinkybg: "#FFF2F2",
      },
      width: {
        "128": "32rem",
      },
      backgroundImage: {
        bgHome: "url('/fondo.png')",
      },
    },
  },
  plugins: [],
};
export default config;
