import config from '@/config'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects',
  description: `Featured engineering projects, backend systems, and AI tools built by ${config.name}.`,
}

function IconSparkles() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>
    </svg>
  )
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-10">

      {/* Header */}
      <div className="border-b border-slate-200/80 pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          <IconSparkles /> Engineering Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Projects &amp; Systems</h1>
        <p className="text-slate-600 text-base max-w-2xl">
          Production backends, AI agent platforms, and cloud infrastructure engineered by {config.name}.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

    </div>
  )
}

