const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Enable standalone output mode
  output: 'standalone',
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
