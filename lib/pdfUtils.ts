'use client'

import { pdf } from '@react-pdf/renderer'
import PDFResume from '@/components/PDFResume'
import portfolioData from '@/data/portfolio.json'

export const generatePDF = async () => {
  try {
    const blob = await pdf(PDFResume()).toBlob()
    return blob
  } catch (error) {
    console.error('Error generating PDF:', error)
    throw error
  }
}

export const generateFileName = () => {
  const { profile } = portfolioData
  // Convert name to filename format: "John Doe" -> "John_Doe_Resume.pdf"
  const nameForFile = profile.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '')
  return `${nameForFile}_Resume.pdf`
}

export const downloadPDF = async (customFilename?: string) => {
  try {
    const blob = await generatePDF()
    const filename = customFilename || generateFileName()
    
    // Create download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error downloading PDF:', error)
    throw error
  }
}