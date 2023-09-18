const postcss = require('postcss');
const terser = require('terser');
const fs = require('node:fs/promises');

module.exports = async () => {
	return {
		css: {
			fonts: (
				await postcss([require('autoprefixer'), require('cssnano')]).process(
					await fs.readFile('./src/styles/fonts.css', 'utf-8'),
					{
						from: undefined,
					},
				)
			).content,
		},
		js: {
			lightswitch: (
				await terser.minify(
					await fs.readFile('./src/scripts/lightswitch.js', 'utf-8'),
				)
			).code,
			mailto: (
				await terser.minify(
					await fs.readFile('./src/scripts/index.js', 'utf-8'),
				)
			).code,
		},
	};
};
