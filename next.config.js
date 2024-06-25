/** @type {import('next').NextConfig} */
const config = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	experimental: {
		typedRoutes: false,
	},
};

export default config;
