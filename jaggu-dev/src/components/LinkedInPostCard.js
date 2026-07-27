function IconLinkedIn() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconArrowUpRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

export default function LinkedInPostCard({ post }) {
  const { title, excerpt, tags, url, date } = post

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col hover:border-[#0A66C2]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#0A66C2]/[0.02]"
    >
      {/* Badge + date + arrow */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A66C2]/10 px-2.5 py-1 text-xs font-semibold text-[#0A66C2]">
            <IconLinkedIn />
            LinkedIn
          </span>
          <time className="text-xs text-slate-400 font-mono">{formatDate(date)}</time>
        </div>
        <span className="shrink-0 text-slate-400 group-hover:text-[#0A66C2] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          <IconArrowUpRight />
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0A66C2] transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
        {excerpt}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#0A66C2] group-hover:underline">
        Read on LinkedIn <IconArrowUpRight />
      </p>
    </a>
  )
}

