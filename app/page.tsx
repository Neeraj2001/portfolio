'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function HomePage() {
  const { profile, bio, skills, projects } = portfolioData
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50/30 dark:from-primary-900 dark:to-primary-800">
      {/* Hero Section with Asymmetric Layout */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
            {/* Left Side - Name and Title */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-primary-900 dark:text-primary-100 leading-tight">
                  {profile.name.split(' ')[0]}
                  <br />
                  <span className="gradient-text">{profile.name.split(' ')[1]}</span>
                </h1>
                <p className="text-xl lg:text-2xl text-primary-600 dark:text-primary-300 font-medium">
                  {profile.title}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-primary-700 dark:text-primary-300 leading-relaxed max-w-2xl"
              >
                {bio.summary}
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {skills.frontend.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/projects" className="btn-primary">
                  View Projects
                  <ArrowRight size={20} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                  <Mail size={20} />
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Profile Image and Social */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent-400 to-accent-600">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">4+ YRS</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex space-x-4"
              >
                <Link
                  href={profile.github}
                  target="_blank"
                  className="p-3 bg-white dark:bg-primary-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-primary-600 dark:text-primary-300 hover:text-accent-600"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  className="p-3 bg-white dark:bg-primary-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-primary-600 dark:text-primary-300 hover:text-accent-600"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href={`mailto:${profile.email}`}
                  className="p-3 bg-white dark:bg-primary-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-primary-600 dark:text-primary-300 hover:text-accent-600"
                >
                  <Mail size={24} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              A selection of my recent work showcasing full-stack development and modern web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6 group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-accent-600 text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-primary-600 dark:text-primary-300 hover:text-accent-600 transition-colors flex items-center gap-1"
                  >
                    <Github size={16} />
                    Code
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-primary-600 dark:text-primary-300 hover:text-accent-600 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight size={16} />
                      Demo
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects" className="btn-primary">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section-padding bg-primary-900 dark:bg-primary-950 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-primary-300 dark:text-primary-400 mb-6">
                Learn about my experience, skills, and passion for technology.
              </p>
              <Link href="/about" className="text-accent-400 dark:text-accent-300 hover:text-accent-300 dark:hover:text-accent-200 transition-colors">
                Read More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">Resume</h3>
              <p className="text-primary-300 dark:text-primary-400 mb-6">
                View my professional experience and download my resume.
              </p>
              <Link href="/resume" className="text-accent-400 dark:text-accent-300 hover:text-accent-300 dark:hover:text-accent-200 transition-colors">
                View Resume →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-primary-300 dark:text-primary-400 mb-6">
                Let's discuss opportunities and build something amazing together.
              </p>
              <Link href="/contact" className="text-accent-400 dark:text-accent-300 hover:text-accent-300 dark:hover:text-accent-200 transition-colors">
                Get In Touch →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}