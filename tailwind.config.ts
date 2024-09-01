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
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1440px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        growRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        growRight: "growRight 1s ease-in-out forwards",
      },
      boxShadow: {
        "product-shadow": "0px 0px 2px 0px rgba(0, 0, 0, 0.3)",
        "card-shadow": "2px 2px 2px 0px rgba(0, 0, 0, 0.3)",
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
      backgroundImage: {
        bgHome: "url('/fondo.png')",
      },
    },
  },
  plugins: [],
};
export default config;
