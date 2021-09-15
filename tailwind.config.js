const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-normal": "#6CAB63",
        "green-hover": "#61A257",
        "green-focus": "#599550",
        "green-stroke": "#63A05A",
				"yellow-normal": "#FBBA48",
				"yellow-hover": "#FBB439",
				"yellow-focus": "#FBAC25",
				"yellow-stroke": "#F2AF3F",
				"ghost-hover": "#F0F0F0",
				"ghost-focus": "#D9D9D9",
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
