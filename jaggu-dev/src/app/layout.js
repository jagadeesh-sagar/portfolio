import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import config from '@/config'

// Ensures correct scaling on all mobile browsers
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  title: {
    default: `${config.name} — ${config.tagline}`,
    template: `%s | ${config.name}`,
  },
  description: config.bio,
  keywords: config.skills.join(', '),
  authors: [{ name: config.name }],
  openGraph: {
    title: `${config.name} — ${config.tagline}`,
    description: config.bio,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
