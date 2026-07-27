import config from '@/config'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 py-10 mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-800">{config.name}</span>. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${config.email}`}
            className="text-slate-500 hover:text-indigo-600 transition-colors"
          >
            {config.email}
          </a>
        </div>

      </div>
    </footer>
  )
}

