'use client'

import React from 'react'
import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer'
import portfolioData from '@/data/portfolio.json'

// Register fonts (you can add custom fonts here if needed)
// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
// })

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: 30,
    marginBottom: 30,
    borderRadius: 5,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nameSection: {
    flex: 2,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#cbd5e1',
    marginBottom: 15,
  },
  summary: {
    fontSize: 11,
    color: '#e2e8f0',
    lineHeight: 1.4,
    maxWidth: 300,
  },
  contactSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  contactItem: {
    fontSize: 10,
    color: 'white',
    marginBottom: 3,
    textAlign: 'right',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 10,
  },
  socialLink: {
    fontSize: 9,
    color: '#a5b4fc',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#6366f1',
    borderBottomStyle: 'solid',
  },
  experienceItem: {
    marginBottom: 20,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#e2e8f0',
    borderLeftStyle: 'solid',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  company: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 10,
    color: '#64748b',
  },
  description: {
    fontSize: 10,
    color: '#475569',
    marginBottom: 8,
    lineHeight: 1.4,
  },
  responsibilities: {
    marginBottom: 10,
  },
  responsibilityTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  responsibilityItem: {
    fontSize: 10,
    color: '#475569',
    marginBottom: 2,
    marginLeft: 10,
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  technologyTag: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    fontSize: 8,
    padding: 3,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  skillCategory: {
    width: '45%',
    marginBottom: 15,
  },
  skillCategoryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
  skillTag: {
    fontSize: 9,
    padding: 4,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },
  frontendTag: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  },
  backendTag: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  cloudTag: {
    backgroundColor: '#f3e8ff',
    color: '#7c3aed',
  },
  softTag: {
    backgroundColor: '#fed7aa',
    color: '#ea580c',
  },
  educationItem: {
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#e2e8f0',
    borderLeftStyle: 'solid',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  degree: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  school: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: 'bold',
  },
  courseworkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 8,
  },
  courseworkTag: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    fontSize: 8,
    padding: 3,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },
})

const PDFResume = () => {
  const { profile, bio, skills, experience, education } = portfolioData

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.nameSection}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.title}>{profile.title}</Text>
              <Text style={styles.summary}>{bio.summary}</Text>
            </View>
            
            <View style={styles.contactSection}>
              <Text style={styles.contactItem}>{profile.email}</Text>
              <Text style={styles.contactItem}>{profile.phone}</Text>
              <Text style={styles.contactItem}>{profile.location}</Text>
              <Text style={styles.contactItem}>{profile.website}</Text>
              <View style={styles.socialLinks}>
                <Text style={styles.socialLink}>GitHub</Text>
                <Text style={styles.socialLink}>LinkedIn</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experience.map((job) => (
            <View key={job.id} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <View>
                  <Text style={styles.jobTitle}>{job.position}</Text>
                  <Text style={styles.company}>{job.company} • {job.location}</Text>
                </View>
                <Text style={styles.duration}>{job.duration} • {job.type}</Text>
              </View>
              
              <Text style={styles.description}>{job.description}</Text>
              
              <View style={styles.responsibilities}>
                <Text style={styles.responsibilityTitle}>Key Responsibilities:</Text>
                {job.responsibilities.slice(0, 3).map((responsibility, idx) => (
                  <Text key={idx} style={styles.responsibilityItem}>
                    • {responsibility}
                  </Text>
                ))}
              </View>
              
              <View style={styles.technologiesContainer}>
                {job.technologies.map((tech) => (
                  <Text key={tech} style={styles.technologyTag}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationItem}>
            <View style={styles.educationHeader}>
              <View>
                <Text style={styles.degree}>{education.degree}</Text>
                <Text style={styles.school}>{education.school}</Text>
              </View>
              <Text style={styles.duration}>{education.duration} • GPA: {education.gpa}</Text>
            </View>
            
            <View style={styles.courseworkContainer}>
              {education.coursework.map((course) => (
                <Text key={course} style={styles.courseworkTag}>
                  {course}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Frontend Development</Text>
              <View style={styles.skillTags}>
                {skills.frontend.map((skill) => (
                  <Text key={skill} style={[styles.skillTag, styles.frontendTag]}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
            
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Backend Development</Text>
              <View style={styles.skillTags}>
                {skills.backend.map((skill) => (
                  <Text key={skill} style={[styles.skillTag, styles.backendTag]}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
            
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Cloud & Tools</Text>
              <View style={styles.skillTags}>
                {[...skills.cloud, ...skills.tools].map((skill) => (
                  <Text key={skill} style={[styles.skillTag, styles.cloudTag]}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
            
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Soft Skills</Text>
              <View style={styles.skillTags}>
                {skills.soft.map((skill) => (
                  <Text key={skill} style={[styles.skillTag, styles.softTag]}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDFResume