import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || undefined,
  }
}

// MDX component overrides — light theme
const components = {
  h1: (props) => <h1 className="mt-10 text-2xl font-bold text-gray-900" {...props} />,
  h2: (props) => (
    <h2
      className="mt-10 mb-4 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-900"
      {...props}
    />
  ),
  h3: (props) => <h3 className="mt-8 text-lg font-semibold text-gray-800" {...props} />,
  p:  (props) => <p className="my-5 text-gray-700 leading-relaxed" {...props} />,
  a:  (props) => (
    <a
      className="text-accent underline underline-offset-2 decoration-accent-border hover:text-accent-hover"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-accent-light px-1.5 py-0.5 font-mono text-sm text-accent font-medium"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-gray-200 bg-gray-900 p-4 text-sm font-mono leading-relaxed text-gray-100"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-5 border-l-4 border-accent pl-5 text-gray-600 italic"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-5 ml-6 list-disc space-y-1.5 text-gray-700" {...props} />,
  ol: (props) => <ol className="my-5 ml-6 list-decimal space-y-1.5 text-gray-700" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  hr: () => <hr className="my-8 border-gray-200" />,
  strong: (props) => <strong className="font-semibold text-gray-900" {...props} />,
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter, source } = post

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14">

      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-accent transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        All posts
      </Link>

      {/* Post header */}
      <header className="mb-10 pb-8 border-b border-gray-200 space-y-4">
        {frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
          {frontmatter.title}
        </h1>

        <time
          dateTime={frontmatter.date}
          className="block text-sm text-gray-400 font-mono"
        >
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </time>
      </header>

      {/* MDX content */}
      <article>
        <MDXRemote source={source} components={components} />
      </article>

      {/* Footer nav */}
      <div className="mt-16 border-t border-gray-200 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to all posts
        </Link>
      </div>

    </div>
  )
}
