'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import config from '@/config'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About & Skills' },
  { href: '/blog',     label: 'Writing / Blog' },
]

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  )
}

function IconFileText() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">

          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 font-mono text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
              JS
            </div>
            <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {config.name} <span className="text-indigo-600 font-mono text-xs font-medium">.dev</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1.5">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-xl px-3.5 py-1.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {label}
                </Link>
              )
            })}

            {/* Direct Recruiter Resume CTA */}
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
            >
              <IconFileText />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>

        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden fixed inset-0 top-[57px] z-40 bg-white/95 backdrop-blur-lg border-t border-slate-100 flex flex-col animate-in fade-in duration-200">
          <nav className="flex flex-col px-5 pt-5 pb-8 gap-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={config.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-700"
              >
                <IconFileText />
                View Resume
              </a>
            </div>

            {/* Quick Contact info */}
            <div className="mt-4 flex items-center justify-between px-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <a href={config.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">GitHub</a>
              <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">LinkedIn</a>
              <a href={`mailto:${config.email}`} className="hover:text-indigo-600">Email Me</a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
