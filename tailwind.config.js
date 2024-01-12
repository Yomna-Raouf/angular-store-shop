/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "ui-sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#E6ECFC",
          700: "#002985",
        },
        gray: {
          400: "#98A2B3",
          900: "#101828",
        },
      },
    },
  },
  plugins: [],
};
