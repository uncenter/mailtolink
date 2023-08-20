module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/scripts');

	return {
		dir: { input: 'src', output: 'dist', data: '_data' },
		templateFormats: ['njk', '11ty.js'],
	};
};
