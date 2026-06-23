'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import config from '@/config'

const navLinks = [
  { href: '/blog',     label: 'Blog'     },
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About'    },
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
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">

          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            jaggu.dev
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-light text-accent'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-md border border-accent px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>

        </nav>
      </header>

      {/* Mobile drawer — slides down below the sticky header */}
      {open && (
        <div className="sm:hidden fixed inset-0 top-[49px] z-40 bg-white border-t border-gray-100 flex flex-col">
          <nav className="flex flex-col px-4 pt-4 pb-8 gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-light text-accent'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href={config.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-accent px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                View Resume
              </a>
            </div>

            {/* Social links in drawer */}
            <div className="mt-4 flex items-center gap-4 px-1">
              <a href={config.github} target="_blank" rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <a href={config.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href={`mailto:${config.email}`}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
