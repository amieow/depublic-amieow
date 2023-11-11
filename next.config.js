/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	dest: "public",
});

const nextConfig = withPWA({
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV !== "production",
	},
});

module.exports = nextConfig;
