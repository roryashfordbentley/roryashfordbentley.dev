const { withPayload } = require("@payloadcms/next/withPayload");
module.exports = withPayload({
	i18n: {
		locales: ["en", "en-gb"],
		defaultLocale: "en-gb",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	async headers() {
		// these are also defined in the root layout since github pages doesn't support headers
		const headers = [
			{
				key: "X-Frame-Options",
				value: "SAMEORIGIN",
			},
			{
				key: "Content-Security-Policy",
				value: "frame-ancestors 'self'",
			},
		];
		return [
			{
				source: "/(.*)",
				headers,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/admin",
				destination: "/admin/index.html",
			},
		];
	},
});
