const postcss = require('postcss');
const sass = require('sass');

class Page {
	data() {
		return {
			permalink: '/styles/index.css',
			eleventyExcludeFromCollections: true,
		};
	}

	async render() {
		const content = sass.compile(`${__dirname}/index.scss`).css.toString();

		let plugins = [
			require('tailwindcss'),
			require('autoprefixer'),
			require('@fullhuman/postcss-purgecss')({
				content: ['./src/index.njk'],
				whitelist: ['[theme="dark"]', 'active'],
			}),
			require('cssnano'),
		];

		const css = await postcss(plugins).process(content, {
			from: `${__dirname}/index.css`,
			to: `${__dirname}/index.css`,
		});
		return css.content;
	}
}

module.exports = Page;
