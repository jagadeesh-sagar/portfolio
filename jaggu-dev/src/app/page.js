import Image from 'next/image'
import Link from 'next/link'
import config from '@/config'
import { getAllPosts } from '@/lib/posts'
import LinkedInPostCard from '@/components/LinkedInPostCard'

// ── Icons ────────────────────────────────────────────────────────────────────

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const posts        = await getAllPosts()
  const recent       = posts.slice(0, 2)
  const featuredProjects = config.projects.slice(0, 2)
  const recentLinkedIn = config.linkedinPosts.slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 space-y-16">

      {/* ── Hero ── */}
      <section className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8">

        {/* Left — text */}
        <div className="flex-1 min-w-0">
          {/* Open-to-work badge */}
          {config.openToWork && (
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Open to work
            </span>
          )}

          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            {config.name}
          </h1>

          <p className="mt-3 text-xl font-medium text-accent">
            {config.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Final-year CS student at St. Martin&apos;s Engineering College, Hyderabad.
            I build backends with <strong className="font-medium text-gray-800">Django &amp; PostgreSQL</strong>,
            deploy on <strong className="font-medium text-gray-800">AWS EC2, S3, SQS, SNS &amp; Lambda</strong>,
            and ship frontends with <strong className="font-medium text-gray-800">React</strong>.
            My latest project adds <strong className="font-medium text-gray-800">31 MCP endpoints</strong> so AI agents can call the API directly.
          </p>

          {/* Location */}
          <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-400">
            <IconMapPin />
            {config.location}
          </p>

          {/* CTA links */}
          <div className="mt-6 flex flex-wrap gap-3 sm:flex-row">
            <a href={config.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconDownload />
              Resume
            </a>
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <IconGitHub />
              GitHub
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <IconLinkedIn />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — avatar */}
        <div className="shrink-0 self-center sm:self-start">
          <div className="relative h-24 w-24 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-4 ring-accent-border shadow-md">
            <Image
              src={config.avatar}
              alt={`${config.name} — profile photo`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </section>

      {/* ── Highlighted Project Banner ── */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-accent-hover p-[1px] shadow-sm">
        <div className="relative rounded-2xl bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 h-full">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Check out Chatram</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
              My latest production-grade E-Commerce backend built with Django, DRF, and AWS S3. 
              Experience the live site or read the deep-dive architectural blog.
            </p>
          </div>
          <div className="flex shrink-0 flex-col sm:flex-row gap-3">
            <a
              href="https://ecommerce.chatram.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap justify-center"
            >
              <IconExternal />
              Live Demo
            </a>
            <Link href="/blog/chatram-ecommerce-architecture" className="btn-outline whitespace-nowrap justify-center">
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section>
        <p className="section-heading">Skills</p>
        <div className="flex flex-wrap gap-2">
          {config.skills.map((skill) => (
            <span key={skill} className="tag text-sm px-3 py-1">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <p className="section-heading mb-0">Featured Projects</p>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
          >
            All projects <IconArrow />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {featuredProjects.map((project) => (
            <div key={project.name} className="card">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-semibold text-gray-900">{project.name}</h2>
                <div className="flex shrink-0 gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <IconGitHub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                      aria-label="Live demo"
                    >
                      <IconExternal />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Latest Posts ── */}
      {recent.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <p className="section-heading mb-0">Latest Posts</p>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
            >
              All posts <IconArrow />
            </Link>
          </div>

          <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 overflow-hidden">
            {recent.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-white px-5 py-4 hover:bg-accent-light/30 transition-colors group"
              >
                <div className="space-y-1 min-w-0">
                  <p className="font-medium text-gray-900 group-hover:text-accent transition-colors truncate">
                    {post.title}
                  </p>
                  {post.excerpt && (
                    <p className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</p>
                  )}
                </div>
                <time
                  dateTime={post.date}
                  className="shrink-0 text-xs text-gray-400 font-mono"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric',
                  })}
                </time>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── LinkedIn Writing ── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <p className="section-heading mb-0">LinkedIn Writing</p>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-[#0A66C2] hover:underline transition-colors"
          >
            All posts <IconArrow />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentLinkedIn.map((post) => (
            <LinkedInPostCard key={post.url} post={post} />
          ))}
        </div>
      </section>

    </div>
  )
}
