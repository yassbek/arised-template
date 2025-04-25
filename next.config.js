const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Enable standalone output mode
  // output: "standalone", // Not needed for Vercel deployment
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
