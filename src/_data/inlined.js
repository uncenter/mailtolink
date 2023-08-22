const postcss = require('postcss');
const UglifyJS = require('uglify-js');

const { readFile } = require('node:fs/promises');

module.exports = async () => {
	return {
		css: {
			fonts: await postcss([require('autoprefixer'), require('cssnano')])
				.process(await readFile('./src/fonts/fonts.css', 'utf-8'), {
					from: undefined,
					to: undefined,
				})
				.then((result) => result.content),
		},
		js: {
			lightswitch: UglifyJS.minify(
				await readFile('./src/scripts/lightswitch.js', 'utf-8'),
			).code,
		},
	};
};
