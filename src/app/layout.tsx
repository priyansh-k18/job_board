import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Job Board | Find Your Next Role',
  description: 'The premium job board for AI and Software Developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="nav-brand">
            JobBoard.ai
          </Link>
          <div className="nav-links">
            <Link href="/">Browse Jobs</Link>
            <Link href="/post-job" className="btn-primary">Post a Job</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
