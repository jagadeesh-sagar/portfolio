import Image from 'next/image'
import config from '@/config'

export const metadata = {
  title: 'About',
  description: config.bio,
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function IconGraduationCap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">

      {/* Header with photo */}
      <div className="border-b border-gray-200 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Avatar */}
          <div className="shrink-0 self-start sm:self-center">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-4 ring-accent-border shadow-md">
              <Image
                src={config.avatar}
                alt={`${config.name} — profile photo`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Name + tagline */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{config.name}</h1>
            <p className="mt-1 text-base font-medium text-accent">{config.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <IconMapPin />
                {config.location}
              </span>
              <span className="flex items-center gap-1.5">
                <IconMail />
                <a href={`mailto:${config.email}`} className="hover:text-accent transition-colors">
                  {config.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="space-y-4">
        <p className="section-heading">Who I am</p>
        <p className="text-gray-700 leading-relaxed text-base">
          I&apos;m a final-year Computer Science student at St. Martin&apos;s Engineering College,
          Hyderabad. My core focus is backend engineering and autonomous AI agent development — building systems with <strong>Django</strong>, <strong>PostgreSQL</strong>, and <strong>Python</strong> that are reliable, well-optimised, and production-ready.
        </p>
        <p className="text-gray-700 leading-relaxed text-base">
          On the cloud side, I deploy on <strong>AWS EC2</strong> with Docker + Nginx, use{' '}
          <strong>AWS S3</strong>, <strong>SQS</strong>, <strong>SNS</strong>, and{' '}
          <strong>Lambda</strong> for storage, messaging, and serverless tasks, and automate
          workflows with n8n. I also build frontends with <strong>React</strong> — so I can
          own a feature end-to-end, from the database to the UI.
        </p>
        <p className="text-gray-700 leading-relaxed text-base">
          I specialize in building AI-integrated developer tools and backend interfaces — such as my <strong>CLI Autonomous AI Coding Agent</strong> (featuring multi-tool execution, bash integration, persistent SQLite session memory, and multi-provider LLM support) and <strong>31 FastMCP endpoints</strong> on my e-commerce REST API.
        </p>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <p className="section-heading">Education</p>
        <div className="card flex gap-4">
          <div className="mt-0.5 shrink-0 rounded-lg border border-accent-border bg-accent-light p-2 text-accent">
            <IconGraduationCap />
          </div>
          <div>
            <p className="font-semibold text-gray-900">B.Tech in Computer Science &amp; Engineering</p>
            <p className="text-sm text-gray-600 mt-0.5">
              St. Martin&apos;s Engineering College, Hyderabad
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
              <span>2022 – 2026</span>
              <span>CGPA ~8.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills — categorized */}
      <section className="space-y-6">
        <p className="section-heading">Skills</p>
        {config.skillCategories.map((cat) => (
          <div key={cat.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="tag text-sm px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Resume view */}
      <section className="rounded-xl border border-accent-border bg-accent-light/40 p-5 sm:p-6 flex flex-col gap-4">
        <div>
          <p className="font-semibold text-gray-900">Want the full picture?</p>
          <p className="text-sm text-gray-600 mt-1">
            View my resume for a complete overview of my experience and projects.
          </p>
        </div>
        <a
          href={config.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto justify-center"
        >
          <IconDownload />
          View Resume
        </a>
      </section>

    </div>
  )
}
