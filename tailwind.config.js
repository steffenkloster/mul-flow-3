/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lime: "#00FF00",
        gray: "#1d1d1b",
      },

      strokeWidth: {
        4: "4px",
        10: "10px",
      },
    },
  },
  plugins: [],
};
