const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/index.njk'],
	darkMode: ['class', '[theme="dark"]'],
	theme: {
		fontSize: {
			sm: ['0.875rem', '1.15'],
			base: ['1rem', '1.15'],
		},
		extend: {
			screens: {
				xs: '480px',
				'3xl': '1920px',
			},
			colors: {
				transparent: colors.transparent,
				black: colors.black,
				white: colors.white,
				current: colors.current,

				theme: {
					black: '#111111',
				},
			},
		},
	},
	corePlugins: {
		preflight: false,
		container: false,
	},
	plugins: [],
};
