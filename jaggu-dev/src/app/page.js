import Image from 'next/image'
import Link from 'next/link'
import config from '@/config'
import { getAllPosts } from '@/lib/posts'
import LinkedInPostCard from '@/components/LinkedInPostCard'
import ProjectCard from '@/components/ProjectCard'

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

function IconSparkles() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>
    </svg>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const posts        = await getAllPosts()
  const recent       = posts.slice(0, 2)
  const featuredProjects = config.projects.slice(0, 3)
  const recentLinkedIn = config.linkedinPosts.slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-16">

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 py-4">

        {/* Left — Text */}
        <div className="flex-1 min-w-0 space-y-5">
          {/* Status & Recruiter Badge */}
          <div className="flex flex-wrap items-center gap-2">
            {config.openToWork && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/80 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to Full-Time Roles
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 border border-indigo-200/60">
              <IconSparkles /> Backend &amp; AI Agent Engineer
            </span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I&apos;m <span className="text-gradient">{config.name}</span> 👋
            </h1>
            <p className="mt-2 text-lg sm:text-xl font-semibold text-slate-700">
              {config.tagline}
            </p>
          </div>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Final-year CS student at St. Martin&apos;s Engineering College, Hyderabad.
            I engineer production backends with <strong className="font-semibold text-slate-900">Django &amp; PostgreSQL</strong>,
            architect cloud pipelines on <strong className="font-semibold text-slate-900">AWS (EC2, S3, SQS, SNS, Lambda)</strong>,
            and build autonomous <strong className="font-semibold text-indigo-600">AI Agents &amp; FastMCP interfaces</strong>.
          </p>

          {/* Location & Quick Info */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <IconMapPin />
              {config.location}
            </span>
            <span>•</span>
            <span>Expected Graduation: May 2026</span>
          </div>

          {/* CTA Link Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={config.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconDownload />
              Download Resume
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

        {/* Right — Avatar with Glow */}
        <div className="shrink-0 self-center md:self-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-md transition duration-500 group-hover:opacity-100 animate-pulse-subtle" />
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl bg-slate-100">
              <Image
                src={config.avatar}
                alt={`${config.name} profile photo`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

      </section>

      {/* ── Recruiter Quick Glance Snapshot ── */}
      <section className="glass-panel rounded-2xl p-6 shadow-sm border border-indigo-100/80 bg-gradient-to-r from-white via-indigo-50/30 to-purple-50/20">
        <div className="flex items-center justify-between mb-3 border-b border-indigo-100 pb-3">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-600" /> Recruiter Quick Summary
          </p>
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
          >
            View Full Resume <IconArrow />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1 text-slate-800">
          <div>
            <span className="text-xs font-medium text-slate-400 block uppercase">Role Focus</span>
            <span className="font-semibold text-sm">Backend &amp; AI Engineer</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-400 block uppercase">Primary Stack</span>
            <span className="font-semibold text-sm">Python, Django, Postgres</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-400 block uppercase">Cloud &amp; DevOps</span>
            <span className="font-semibold text-sm">AWS EC2, S3, Docker</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-400 block uppercase">AI Innovations</span>
            <span className="font-semibold text-sm">CLI Agents, FastMCP</span>
          </div>
        </div>
      </section>

      {/* ── Spotlight Flagship Projects ── */}
      <section className="space-y-4">
        <p className="section-heading">
          <IconSparkles /> Flagship Featured Projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Flagship Card 1: CLI Autonomous AI Coding Agent */}
          <div className="card-spotlight flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 text-white px-3 py-0.5 text-xs font-bold">
                AI Coding Agent
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">CLI Autonomous AI Coding Agent</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                A modular, CLI-based autonomous AI coding assistant featuring multi-tool execution, bash commands, persistent SQLite session memory, and multi-provider LLM integration (Anthropic, Groq, DeepSeek).
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="tag">Python</span>
                <span className="tag">AI Agents</span>
                <span className="tag">SQLite</span>
                <span className="tag">Tool Calling</span>
                <span className="tag">LLMs</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-indigo-100/80">
              <a
                href="https://github.com/jagadeesh-sagar/cli_agent"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4 justify-center"
              >
                <IconGitHub />
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Flagship Card 2: Chatram E-Commerce Platform */}
          <div className="card-spotlight flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 text-white px-3 py-0.5 text-xs font-bold">
                E-Commerce Platform
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Chatram E-Commerce</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                A production-grade REST API for a full-featured e-commerce platform with real-time chat, AWS S3 presigned URL media uploads, Celery task queues, and Channels WebSockets.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="tag">Django</span>
                <span className="tag">DRF</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">AWS S3</span>
                <span className="tag">Celery</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-indigo-100/80">
              <a
                href="https://ecommerce.chatram.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4 justify-center"
              >
                <IconExternal />
                Live Demo
              </a>
              <a
                href="https://github.com/jagadeesh-sagar/django-ecommerce-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-3 justify-center"
              >
                <IconGitHub />
                GitHub
              </a>
              <Link
                href="/blog/chatram-ecommerce-architecture"
                className="btn-outline text-xs py-2 px-3 justify-center"
              >
                Read Blog
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Technical Skills Matrix ── */}
      <section className="space-y-4">
        <p className="section-heading">
          <IconSparkles /> Technical Skillset
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {config.skillCategories.map((cat) => (
            <div key={cat.label} className="card p-5 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects Grid ── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="section-heading mb-0">
            <IconSparkles /> Top Projects
          </p>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            All projects ({config.projects.length}) <IconArrow />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* ── Latest Blog Posts ── */}
      {recent.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="section-heading mb-0">
              <IconSparkles /> Architectural Posts
            </p>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              All articles <IconArrow />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm">
            {recent.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5 hover:bg-indigo-50/40 transition-colors group"
              >
                <div className="space-y-1 min-w-0">
                  <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate text-base">
                    {post.title}
                  </p>
                  {post.excerpt && (
                    <p className="text-sm text-slate-500 line-clamp-1">{post.excerpt}</p>
                  )}
                </div>
                <time
                  dateTime={post.date}
                  className="shrink-0 text-xs text-slate-400 font-mono"
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

      {/* ── LinkedIn Technical Writing ── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="section-heading mb-0">
            <IconSparkles /> LinkedIn Engineering Insights
          </p>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-[#0A66C2] hover:underline transition-colors"
          >
            All LinkedIn posts <IconArrow />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentLinkedIn.map((post) => (
            <LinkedInPostCard key={post.url} post={post} />
          ))}
        </div>
      </section>

    </div>
  )
}
