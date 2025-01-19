/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https://',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig;