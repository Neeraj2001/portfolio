'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react'
import portfolioData from '@/data/portfolio.json'

export default function ContactPage() {
  const { profile, contact } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    const { name, email, subject, message } = formData
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill in all fields')
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const emailBody = `Hi ${profile.name},

${message}

---
Best regards,
${name}
Email: ${email}`

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    
    // Small delay to show loading state
    setTimeout(() => {
      // Open default mail client
      window.location.href = mailtoLink
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    }, 500)
  }

  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto leading-relaxed">
              {contact.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a conversation about technology and innovation. Feel free 
                    to reach out through any of the channels below.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {profile.email && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                        <Mail className="text-accent-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-primary-900 dark:text-primary-100">Email</p>
                        <a 
                          href={`mailto:${profile.email}`}
                          className="text-primary-600 dark:text-primary-300 hover:text-accent-600 transition-colors"
                        >
                          {profile.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {profile.phone && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                        <Phone className="text-accent-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-primary-900 dark:text-primary-100">Phone</p>
                        <a 
                          href={`tel:${profile.phone}`}
                          className="text-primary-600 dark:text-primary-300 hover:text-accent-600 transition-colors"
                        >
                          {profile.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-accent-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-primary-900 dark:text-primary-100">Location</p>
                      <p className="text-primary-600 dark:text-primary-300">{profile.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-4">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {contact.socialLinks.map((social) => {
                      const IconComponent = socialIcons[social.icon as keyof typeof socialIcons]
                      return social.url ? (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-300 hover:bg-accent-100 dark:hover:bg-accent-800 hover:text-accent-600 transition-colors"
                          aria-label={social.platform}
                        >
                          <IconComponent size={20} />
                        </a>
                      ) : null
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div className="card p-6">
                  <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    Current Availability
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-primary-600 dark:text-primary-300">Available for new opportunities</span>
                  </div>
                  <p className="text-sm text-primary-500 dark:text-primary-400">
                    Typically responds within 24 hours
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                    Send Me a Message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-primary-600 dark:text-primary-300">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <div className="relative group">
                      <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled
                            className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled
                            className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label 
                          htmlFor="subject" 
                          className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                        >
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled
                          className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="message" 
                          className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled
                          rows={6}
                          className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed resize-none"
                          placeholder="Tell me about your project, opportunity, or just say hello!"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled
                        className="w-full btn-primary justify-center opacity-50 cursor-not-allowed"
                      >
                        <Send size={20} />
                        Send Message
                      </button>

                      <p className="text-xs text-primary-500 dark:text-primary-400 text-center">
                        By sending this message, you agree that I may contact you regarding your inquiry.
                      </p>
                    </form>
                    
                    {/* Tooltip */}
                    <div className="absolute inset-0 bg-transparent cursor-not-allowed group-hover:bg-black/5 rounded-lg transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                        Contact via mail: {profile.email}
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  What's your response time?
                </h3>
                <p className="text-primary-600 dark:text-primary-300 text-sm">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to mention it in your message subject line.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Are you available for freelance work?
                </h3>
                <p className="text-primary-600 dark:text-primary-300 text-sm">
                  Yes! I'm open to discussing freelance opportunities, especially 
                  for interesting projects that align with my skills and interests.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Do you offer consulting services?
                </h3>
                <p className="text-primary-600 dark:text-primary-300 text-sm">
                  Absolutely. I provide technical consulting for web development, 
                  architecture decisions, and code reviews. Let's discuss your needs.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Can we schedule a call?
                </h3>
                <p className="text-primary-600 dark:text-primary-300 text-sm">
                  Of course! Mention your preferred time and timezone in your message, 
                  and I'll send you a calendar link to schedule a conversation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}