const defaultTheme = require('tailwindcss/defaultTheme')

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
				"secondary-normal": "#393E46",
				"secondary-hover": "#2B2F35",
				"secondary-focus": "#1E2024",
				"secondary-disabled": "#444A54"
			},
			fontFamily: {
				sans:["Mukta", ...defaultTheme.fontFamily.sans]
			}
		}
  },
  variants: {
    extend: {
			backgroundColor: ['active']
		},
  },
  plugins: [],
}
