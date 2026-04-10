import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#140a3e",
        purple: "#8277ff",
        mint: "#77ffb5",
        "light-mint": "#d2fce9",
        "light-purple": "#e0e1ff",
        "light-blue": "#f2f6ff",
        "gray-text": "#454c52",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
