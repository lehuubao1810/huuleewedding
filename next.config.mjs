/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "500px.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "drscdn.500px.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent.fsgn19-1.fna.fbcdn.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
