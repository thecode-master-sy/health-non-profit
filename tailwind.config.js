/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "800px",
      lg: "976px",
      xl: "1440px",
    },

    spacing: {
      1: "0.5rem",
      2: "0.8rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "3rem",
      7: "4rem",
    },

    fontSize: {
      sm: "0.8rem",
      base: "1.12rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    extend: {},
  },
  plugins: [],
};
