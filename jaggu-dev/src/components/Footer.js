import config from '@/config'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {config.name}. Built with Next.js + Tailwind.
        </p>

        <div className="flex items-center gap-5 text-sm">
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${config.email}`}
            className="text-gray-500 hover:text-accent transition-colors"
          >
            {config.email}
          </a>
        </div>

      </div>
    </footer>
  )
}
