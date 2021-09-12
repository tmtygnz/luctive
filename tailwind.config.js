const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-normal": "#5454C5",
        "primary-hover": "#3F3FBB",
        "primary-focus": "#3838A4",
        "primary-disabled": "#6767CB",
        "gray-50": "#828282",
        "gray-100": "#797979",
        "gray-150": "#707070",
        "gray-200": "#686868",
        "gray-300": "#565656",
        "gray-400": "#444444",
        "gray-500": "#323232",
        "gray-600": "#1E1E1E",
        "gray-700": "#090909",
        "gray-750": "#000000",
      },
      fontFamily: {
        sans: ["Mukta", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
