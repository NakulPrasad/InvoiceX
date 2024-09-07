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
        invoice: ['Amazon', 'sans-serif'],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
}

