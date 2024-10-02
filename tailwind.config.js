/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      green: "#C4F82A",
      grey: {
        700: "#333333",
        800: "#1F1F1F",
        900: "#141414",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
