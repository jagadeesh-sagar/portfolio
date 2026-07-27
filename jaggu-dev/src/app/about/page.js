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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
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

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 space-y-12">

      {/* Header Profile Banner */}
      <div className="card p-6 sm:p-8 bg-gradient-to-r from-white via-indigo-50/20 to-purple-50/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Avatar */}
          <div className="shrink-0 self-start sm:self-center">
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-4 ring-indigo-100 shadow-xl bg-slate-100">
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
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/80">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for Hire
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{config.name}</h1>
            <p className="text-base font-semibold text-indigo-600">{config.tagline}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <IconMapPin />
                {config.location}
              </span>
              <span className="flex items-center gap-1.5">
                <IconMail />
                <a href={`mailto:${config.email}`} className="hover:text-indigo-600 transition-colors">
                  {config.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter Cheat-Sheet Card */}
      <section className="glass-panel rounded-2xl p-6 border border-indigo-100/90 shadow-sm space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-700 flex items-center gap-2">
          <IconSparkles /> Recruiter Cheat Sheet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-1">
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Degree</span>
            <span className="font-semibold text-slate-800">B.Tech CSE (2026)</span>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Backend Focus</span>
            <span className="font-semibold text-slate-800">Django, PostgreSQL</span>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Cloud Infra</span>
            <span className="font-semibold text-slate-800">AWS EC2, S3, Docker</span>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Specialization</span>
            <span className="font-semibold text-slate-800">AI Agents &amp; FastMCP</span>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="space-y-4">
        <p className="section-heading">
          <IconSparkles /> Who I Am &amp; Engineering Philosophy
        </p>
        <div className="card space-y-4 text-slate-700 leading-relaxed text-base">
          <p>
            I&apos;m a final-year Computer Science student at St. Martin&apos;s Engineering College,
            Hyderabad. My core focus is backend engineering and autonomous AI agent development — building systems with <strong>Django</strong>, <strong>PostgreSQL</strong>, and <strong>Python</strong> that are reliable, well-optimised, and production-ready.
          </p>
          <p>
            On the cloud side, I deploy on <strong>AWS EC2</strong> with Docker + Nginx, use{' '}
            <strong>AWS S3</strong>, <strong>SQS</strong>, <strong>SNS</strong>, and{' '}
            <strong>Lambda</strong> for storage, messaging, and serverless tasks, and automate
            workflows with n8n. I also build frontends with <strong>React</strong> — so I can
            own a feature end-to-end, from the database to the UI.
          </p>
          <p>
            I specialize in building AI-integrated developer tools and backend interfaces — such as my <strong>CLI Autonomous AI Coding Agent</strong> (featuring multi-tool execution, bash integration, persistent SQLite session memory, and multi-provider LLM support) and <strong>31 FastMCP endpoints</strong> on my e-commerce REST API.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <p className="section-heading">
          <IconSparkles /> Education &amp; Background
        </p>
        <div className="card flex gap-4 items-start">
          <div className="mt-0.5 shrink-0 rounded-xl bg-indigo-50 border border-indigo-200/80 p-3 text-indigo-600">
            <IconGraduationCap />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-lg">B.Tech in Computer Science &amp; Engineering</h3>
            <p className="text-sm font-medium text-slate-600">
              St. Martin&apos;s Engineering College, Hyderabad
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-indigo-600 pt-1">
              <span>Expected Graduation: May 2026</span>
              <span>•</span>
              <span>CGPA: ~8.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-4">
        <p className="section-heading">
          <IconSparkles /> Categorized Skills Matrix
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.skillCategories.map((cat) => (
            <div key={cat.label} className="card space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 border-b border-slate-100 pb-2">
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

      {/* Resume CTA */}
      <section className="card-spotlight flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900">Want the full picture?</h3>
          <p className="text-sm text-slate-600">
            Download my resume for a detailed breakdown of experience, architecture, and projects.
          </p>
        </div>
        <a
          href={config.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0 w-full sm:w-auto justify-center"
        >
          <IconDownload />
          Download Resume (PDF)
        </a>
      </section>

    </div>
  )
}

