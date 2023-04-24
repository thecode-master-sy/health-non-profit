/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      mx: "550px",
      md: "800px",
      lg: "1200px",
      xl: "1440px",
    },

    spacing: {
      0: "0px",
      1: "0.5rem",
      2: "0.8rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "3rem",
      7: "4rem",
      8: "5rem",
      9: "8rem",
      10: "12rem",
    },

    fontSize: {
      sm: "0.8rem",
      base: "1.0rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#4F2394",
        "primary-light": "#7339D0",
        secondary: "#AFA2FF",
        "glacious-blue": "#7A89C2",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "light-bg": "#E9E5F1",
      },
    },
  },
  plugins: [],
};
