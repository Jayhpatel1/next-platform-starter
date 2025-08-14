/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
		dest: 'public',
		register: true,
		skipWaiting: true,
});

const nextConfig = {
		reactStrictMode: true,
		images: {
				domains: ['source.unsplash.com', 'images.unsplash.com'],
		},
};

module.exports = withPWA(nextConfig);
