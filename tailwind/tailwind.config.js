/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ".tailwind-dark"],
  content: ["./src/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
