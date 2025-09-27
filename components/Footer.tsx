import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { profile } = portfolioData
  
  const socialLinks = [
    profile.github && { icon: Github, href: profile.github, label: 'GitHub' },
    profile.linkedin && { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    profile.email && { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ].filter((link): link is { icon: any; href: string; label: string } => Boolean(link))

  return (
    <footer className="bg-primary-50 dark:bg-primary-900 border-t border-primary-200 dark:border-primary-700">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-primary-600 dark:text-primary-300 text-sm">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-primary-500 dark:text-primary-400 text-xs mt-1">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 dark:text-primary-400 hover:text-accent-600 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}