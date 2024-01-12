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
          50: "#F9FAFB",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
      },
      fontSize: {
        xxs: ".55rem",
      },
    },
  },
  plugins: [],
};
