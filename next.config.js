/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	cleanDistDir: true,
	distDir: 'dist',
	compress: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: [],
	},
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['./**/*.{js,ts,jsx,tsx}'],
	},
	crossOrigin: 'use-credentials',
};

module.exports = nextConfig;
