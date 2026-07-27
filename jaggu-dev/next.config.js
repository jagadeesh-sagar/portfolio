/** @type {import('next').NextConfig} */

// NOTE: This project uses `next-mdx-remote` to render MDX blog posts.
// MDX files live in content/blog/ and are read with fs + gray-matter at
// request time — no webpack MDX loader is needed here.
// Do NOT add @next/mdx or experimental.mdxRs; they conflict with next-mdx-remote.

const nextConfig = {
  images: {},
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig

