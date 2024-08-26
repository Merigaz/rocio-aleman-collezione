import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
