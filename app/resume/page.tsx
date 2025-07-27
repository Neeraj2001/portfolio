'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function ResumePage() {
  const { profile, bio, skills, experience, education } = portfolioData

  return (
    <div className="min-h-screen bg-white dark:bg-primary-900">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50/30 dark:from-primary-900 dark:to-primary-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-300 max-w-2xl mx-auto mb-8">
              Download my resume or view it online. Always up-to-date with my latest experience and skills.
            </p>
            
            <a
              href={profile.resumePdf}
              download
              className="btn-primary"
            >
              <Download size={20} />
              Download PDF
            </a>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Resume Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-primary-800 shadow-2xl rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div className="bg-primary-900 text-white p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-6 lg:mb-0">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                      {profile.name}
                    </h1>
                    <p className="text-xl text-primary-300 mb-4">
                      {profile.title}
                    </p>
                    <p className="text-primary-200 leading-relaxed max-w-2xl">
                      {bio.summary}
                    </p>
                  </div>
                  
                  <div className="space-y-3 lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <Mail size={16} />
                      <span className="text-sm">{profile.email}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <Phone size={16} />
                      <span className="text-sm">{profile.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <MapPin size={16} />
                      <span className="text-sm">{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <Globe size={16} />
                      <span className="text-sm">{profile.website}</span>
                    </div>
                    <div className="flex gap-4 lg:justify-end mt-4">
                      <a href={profile.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="hover:text-accent-300 transition-colors" />
                      </a>
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} className="hover:text-accent-300 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Experience */}
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 border-b-2 border-accent-600 pb-2">
                    Professional Experience
                  </h2>
                  
                  <div className="space-y-6">
                    {experience.map((job) => (
                      <div key={job.id} className="border-l-4 border-accent-200 pl-6">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100">
                              {job.position}
                            </h3>
                            <p className="text-accent-600 dark:text-accent-400 font-semibold">
                              {job.company} • {job.location}
                            </p>
                          </div>
                          <div className="text-sm text-primary-600 dark:text-primary-300 mt-1 lg:mt-0">
                            {job.duration} • {job.type}
                          </div>
                        </div>
                        
                        <p className="text-primary-700 dark:text-primary-300 mb-3">
                          {job.description}
                        </p>
                        
                        <ul className="list-disc list-inside space-y-1 text-sm text-primary-600 dark:text-primary-300 mb-3">
                          {job.responsibilities.slice(0, 3).map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-1">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 border-b-2 border-accent-600 pb-2">
                    Education
                  </h2>
                  
                  <div className="border-l-4 border-accent-200 pl-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-primary-900">
                          {education.degree}
                        </h3>
                        <p className="text-accent-600 font-semibold">
                          {education.school}
                        </p>
                      </div>
                      <div className="text-sm text-primary-600 mt-1 lg:mt-0">
                        {education.duration} • GPA: {education.gpa}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-3">
                      {education.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 border-b-2 border-accent-600 pb-2">
                    Technical Skills
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">Frontend Development</h3>
                      <div className="flex flex-wrap gap-1">
                        {skills.frontend.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">Backend Development</h3>
                      <div className="flex flex-wrap gap-1">
                        {skills.backend.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">Cloud & Tools</h3>
                      <div className="flex flex-wrap gap-1">
                        {[...skills.cloud, ...skills.tools].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">Soft Skills</h3>
                      <div className="flex flex-wrap gap-1">
                        {skills.soft.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-primary-600 dark:text-primary-300 mb-6">
                Interested in working together? Download my resume and let's connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={profile.resumePdf}
                  download
                  className="btn-primary"
                >
                  <Download size={20} />
                  Download PDF Resume
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}