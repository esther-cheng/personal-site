/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/personal-site", // important for serving from a subpath
  assetPrefix: "/personal-site/", // ensures _next assets are requested from /personal-site/_next/...
  trailingSlash: true, // makes exported pages use folder/index.html (helpful on GH Pages)
  images: {
    unoptimized: true,
  },
  // If you are using Next 13+ and want static export:
  // output: 'export',  // uncomment only if you want Next to use the static export output format
};

export default nextConfig;
