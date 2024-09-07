/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#e2e8f0",
        success: "#16a34a",
        danger: "#e74c3c",
        warning: "#f1c40f",
        info: "#2c3e50",
        light: "#f8fafc",
        dark: "#1c1065",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        invoiceBold: ['AmazonBold', 'sans-serif'],
        invoiceLite: ['AmazonLite', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

