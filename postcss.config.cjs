module.exports = {
	plugins: [
		//require("autoprefixer"),
		//require("cssnano"),
		require("@csstools/postcss-global-data")({
			files: ["./src/styles/tokens/media-queries.css"],
		}),
		require("postcss-custom-media")({
			preserve: true,
		}),
		require("postcss-rem")({
			name: "pxrem", // Default to 'rem-convert'
		}),
		require("postcss-nesting"),
	],
};
