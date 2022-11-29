/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '.',
	cleanDistDirectory: true,
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['./**/*.{js,ts,jsx,tsx}'],
	},
	crossOrigin: 'use-credentials',
};

module.exports = nextConfig;
