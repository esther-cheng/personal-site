/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/personal-site",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
