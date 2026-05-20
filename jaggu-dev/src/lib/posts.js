import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

/**
 * Strip MDX/Markdown syntax from a string and return plain text.
 * Handles: frontmatter (already removed by gray-matter), headings,
 * bold/italic, code blocks, inline code, links, images, HTML tags.
 */
function toPlainText(mdx) {
  return mdx
    .replace(/```[\s\S]*?```/g, '')     // fenced code blocks
    .replace(/`[^`]+`/g, '')            // inline code
    .replace(/!\[.*?\]\(.*?\)/g, '')    // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links → text
    .replace(/^#+\s+/gm, '')            // headings
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // bold
    .replace(/(\*|_)(.*?)\1/g, '$2')    // italic
    .replace(/^[-*>]\s+/gm, '')         // list items / blockquotes
    .replace(/\n{2,}/g, ' ')            // collapse blank lines
    .replace(/\n/g, ' ')                // single newlines → space
    .replace(/<[^>]+>/g, '')            // HTML tags
    .replace(/---/g, '')                // hr
    .trim()
}

/**
 * Returns all posts sorted by date descending.
 * Each post: { slug, title, date, tags, excerpt }
 */
export async function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, '')
    const filePath = path.join(POSTS_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(raw)

    const plainText = toPlainText(content)
    const excerpt =
      data.excerpt ||
      (plainText.length > 150 ? plainText.slice(0, 150).trimEnd() + '…' : plainText)

    return {
      slug,
      title:   data.title  || slug,
      date:    data.date   || '1970-01-01',
      tags:    data.tags   || [],
      excerpt,
    }
  })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Returns the raw MDX source + frontmatter for a single post by slug.
 */
export async function getPostBySlug(slug) {
  const extensions = ['mdx', 'md']
  let filePath = null

  for (const ext of extensions) {
    const candidate = path.join(POSTS_DIR, `${slug}.${ext}`)
    if (fs.existsSync(candidate)) {
      filePath = candidate
      break
    }
  }

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: {
      title:   data.title  || slug,
      date:    data.date   || '1970-01-01',
      tags:    data.tags   || [],
      excerpt: data.excerpt || '',
    },
    source: content,
  }
}
