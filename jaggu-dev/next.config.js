/** @type {import('next').NextConfig} */

// NOTE: This project uses `next-mdx-remote` to render MDX blog posts.
// MDX files live in content/blog/ and are read with fs + gray-matter at
// request time — no webpack MDX loader is needed here.
// Do NOT add @next/mdx or experimental.mdxRs; they conflict with next-mdx-remote.

const nextConfig = {
  // Allow importing SVG, MDX etc. as static assets if needed later
  // (next-mdx-remote does NOT require pageExtensions changes)

  images: {
    // Add remote image domains here if you ever use next/image with external URLs
    // remotePatterns: [{ protocol: 'https', hostname: 'example.com' }],
  },

  // Uncomment to produce a fully static export (no server needed after build)
  // output: 'export',
}

module.exports = nextConfig
