'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Users, Target, Coffee } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function AboutPage() {
  const { bio, skills, experience, education } = portfolioData

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: skills.backend,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: [...skills.cloud, ...skills.tools],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: skills.soft,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-primary-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50/30 dark:from-primary-900 dark:to-primary-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-300 leading-relaxed">
              {bio.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              4 years of building impactful software solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-primary-200" />
                )}
                
                <div className="flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card p-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-1">
                          {job.position}
                        </h3>
                        <p className="text-accent-600 dark:text-accent-400 font-semibold mb-2">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-300 bg-primary-100 dark:bg-primary-700 px-3 py-1 rounded-full">
                          {job.duration}
                        </span>
                        <span className="text-xs text-primary-500 dark:text-primary-400 mt-1">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-primary-700 dark:text-primary-300 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-primary-600 dark:text-primary-300">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Skills & Expertise
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 h-full"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between p-2 bg-primary-50 dark:bg-primary-700 rounded-lg"
                      >
                        <span className="text-sm text-primary-700 dark:text-primary-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-12 text-center">
              Education
            </h2>
            
            <div className="card p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                  <Coffee className="text-white" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-semibold mb-2">
                    {education.school}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <span className="text-primary-600 dark:text-primary-300">{education.duration}</span>
                    <span className="text-primary-600 dark:text-primary-300">GPA: {education.gpa}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}