const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black-hover": "#595959",
      },
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "width",
        spacing: "margin",
      },
      width: {
        220: "40rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      outline: ["active"],
    },
  },
  plugins: [],
};
