module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ 'public/': '.' });

	return {
		dir: { input: 'src', output: 'dist', data: '_data' },
		templateFormats: ['njk', '11ty.js'],
	};
};
