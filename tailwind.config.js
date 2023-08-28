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
				gray: '#9ca3af',
				white: colors.white,
				current: colors.current,

				bg: {
					white: '#effcf9',
					black: '#111111',
				},

				fg: {
					white: '#ffffff',
					black: '#191919',
				},

				accent: {
					black: '#000000',
					gray: '#d5d5d5',
					green: '#64ebcd',
					'green-dark': '#4de8c6',
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
