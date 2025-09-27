import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import portfolioData from '@/data/portfolio.json'

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} - ${portfolioData.profile.title}`,
  description: portfolioData.bio.summary,
  keywords: ['Software Engineer', 'React', 'Node.js', 'TypeScript', 'Full Stack Developer'],
  authors: [{ name: portfolioData.profile.name }],
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