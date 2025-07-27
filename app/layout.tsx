import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alex Johnson - Software Engineer',
  description: 'Passionate software engineer with 4 years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.',
  keywords: ['Software Engineer', 'React', 'Node.js', 'TypeScript', 'Full Stack Developer'],
  authors: [{ name: 'Alex Johnson' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-primary-900">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}