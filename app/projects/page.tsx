'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, Filter } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'
import { cn } from '@/lib/utils'

export default function ProjectsPage() {
  const { projects } = portfolioData
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const statusColors = {
    'Completed': 'bg-green-100 text-green-700',
    'In Progress': 'bg-yellow-100 text-yellow-700',
    'Planning': 'bg-blue-100 text-blue-700'
  }

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-primary-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50/30 dark:from-primary-900 dark:to-primary-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my skills in full-stack development, 
              from concept to deployment. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-primary-200 dark:border-primary-700">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-300">
              <Filter size={20} />
              <span className="font-medium">Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    selectedCategory === category
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="ml-auto text-sm text-primary-500 dark:text-primary-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg mb-6 overflow-hidden">
                  {!imageErrors[project.id] && project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(project.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-accent-600 text-lg font-semibold">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-2 group-hover:text-accent-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded text-xs font-medium">
                          {project.category}
                        </span>
                        <span className={cn(
                          'px-2 py-1 rounded text-xs font-medium',
                          statusColors[project.status as keyof typeof statusColors]
                        )}>
                          {project.status}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-primary-600 dark:text-primary-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent-50 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-600 dark:text-primary-300 hover:text-accent-600 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-600 dark:text-primary-300 hover:text-accent-600 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-primary-500 dark:text-primary-400 text-lg">
                No projects found for the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Project Detail */}
      {filteredProjects.some(p => p.featured) && (
        <section className="section-padding bg-primary-50 dark:bg-primary-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Featured Project Spotlight
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300">
                Deep dive into one of my most impactful projects
              </p>
            </motion.div>

            {filteredProjects
              .filter(p => p.featured)
              .slice(0, 1)
              .map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="card p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Project Image */}
                      <div className="aspect-video bg-gradient-to-br from-accent-200 to-accent-300 rounded-lg overflow-hidden">
                        {!imageErrors[project.id] && project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={338}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(project.id)}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-accent-700 text-2xl font-bold">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Details */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="text-primary-600 dark:text-primary-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary"
                            >
                              <Github size={20} />
                              View Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary"
                            >
                              <ExternalLink size={20} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      )}
    </div>
  )
}