import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import LinkedInPostCard from '@/components/LinkedInPostCard'
import config from '@/config'

export const metadata = {
  title: 'Blog',
  description: "Writing about backend engineering, AI tooling, Django, and things I've shipped.",
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

// LinkedIn logo for the section divider
function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 space-y-14">

      {/* ── Page header ── */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <p className="mt-2 text-gray-500">
          Long-form posts here, shorter writing on LinkedIn — all in one place.
        </p>
      </div>

      {/* ── MDX posts ── */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          Articles
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-400">No posts yet — check back soon.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group block"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                  <h2 className="font-semibold text-gray-900 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-xs text-gray-400 font-mono sm:pt-0.5"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>

                {post.excerpt && (
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── LinkedIn posts ── */}
      <section>
        {/* Section header */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <span className="text-[#0A66C2]"><IconLinkedIn /></span>
            LinkedIn Writing
          </p>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#0A66C2] hover:underline"
          >
            View profile →
          </a>
        </div>

        {/* Thin blue rule under heading */}
        <div className="mb-6 h-px bg-gradient-to-r from-[#0A66C2]/20 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.linkedinPosts.map((post) => (
            <LinkedInPostCard key={post.url} post={post} />
          ))}
        </div>
      </section>

    </div>
  )
}
