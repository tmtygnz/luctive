module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				"accent-normal": "#5454C5",
				"accent-hover": "#3F3FBB",
				"accent-focus": "#3838A4",
				"accent-disabled": "#6767CB"
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
