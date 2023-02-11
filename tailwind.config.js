/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blupayGreen: "#00FF85",
        blupayBlue: "#6197FF",
        "blupayBlue-300": "#F7FAFF",
      },

      fontSize: {
        "7xl": "7rem",
        "6xl": "6rem",
        "5xl": "5rem",
        "4.5xl": "4rem",
      },
    },
  },
  plugins: [],
};
