/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg":  "var(--bg)",
        "text":  "var(--text)",
        "primary": "var(--primary)",
      },
      keyframes: {
                shine: {
                  '0%': { 'background-position': '100%' },
                  '100%': { 'background-position': '-100%' },
                },
              },
              animation: {
                shine: 'shine 5s linear infinite',
              },
      
    },
  },
  plugins: [tailwindAnimate],
}

