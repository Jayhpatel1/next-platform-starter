/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["source.unsplash.com"],
	},
	experimental: {
		optimizePackageImports: ["recharts"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
