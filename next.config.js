/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if your app is not served from the root
  // basePath: '/your-base-path',
};

module.exports = nextConfig;
