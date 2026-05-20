import config from '@/config'

export const metadata = {
  title: 'Projects',
  description: `Things ${config.name} has built — backends, tools, and experiments.`,
}

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">

      {/* Header */}
      <div className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-500">
          Things I&apos;ve built — backends, tools, and experiments.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {config.projects.map((project) => (
          <article key={project.name} className="card flex flex-col gap-4 group">

            {/* Name + links */}
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold text-gray-900 group-hover:text-accent transition-colors leading-snug">
                {project.name}
              </h2>
              <div className="flex shrink-0 items-center gap-3 text-gray-400">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="hover:text-accent transition-colors"
                  >
                    <IconGitHub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="hover:text-accent transition-colors"
                  >
                    <IconExternal />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* Footer links */}
            <div className="flex items-center gap-4 pt-1 border-t border-gray-100 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-500 hover:text-accent transition-colors"
                >
                  <IconGitHub />
                  View source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-500 hover:text-accent transition-colors"
                >
                  <IconExternal />
                  Live demo
                </a>
              )}
            </div>

          </article>
        ))}
      </div>

    </div>
  )
}
