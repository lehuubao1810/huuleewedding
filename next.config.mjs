/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '500px.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'drscdn.500px.org',
            port: '',
          }
        ],
      },
};

export default nextConfig;
