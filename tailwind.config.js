/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F327D",
        secondary: "#FF7A59",
        typography: "#696984",
      },
      backgroundImage:{
        primaryGradient:"linear-gradient(106deg, #545AE7 19.57%, #393FCF 78.85%)"
      }
    },
  },
  plugins: [],
};
