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
		let source = `${__dirname}/index.scss`;
		let content = sass.compile(source).css.toString();
		source = `${__dirname}/index.css`;

		let plugins = [require('autoprefixer'), require('cssnano')];

		const css = await postcss(plugins).process(content, {
			from: source,
			to: source,
		});

		return css.content;
	}
}

module.exports = Page;
