// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Ensure you are using this if deploying a static site
    trailingSlash: true,
  };
  
  module.exports = nextConfig;
  