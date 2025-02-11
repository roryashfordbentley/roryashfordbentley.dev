module.exports = {
	plugins: [
		[
			"@csstools/postcss-global-data",
			{
				files: ["./src/styles/tokens/media-queries.css"],
			},
		],
		[
			"postcss-custom-media",
			{
				preserve: true,
			},
		],
		[
			"postcss-rem",
			{
				name: "pxrem", // Default to 'rem-convert'
			},
		],
		[
			"postcss-nesting",
			{
				name: "pxrem", // Default to 'rem-convert'
			},
		],
	],
};
