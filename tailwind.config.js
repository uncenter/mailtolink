const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/index.njk'],
	darkMode: ['class', '[theme="dark"]'],
	theme: {
		fontSize: {
			base: ['1rem', '1.15'],
		},
		extend: {
			screens: {
				xs: '480px',
			},
			colors: {
				transparent: colors.transparent,
				black: '#111',
				white: colors.white,
				current: colors.current,
			},
		},
	},
	corePlugins: {
		preflight: false,
		container: false,
	},
	plugins: [],
};
