export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  profileImage: string
  resumePdf: string
}

export interface Bio {
  summary: string
  longDescription: string
}

export interface Skills {
  frontend: string[]
  backend: string[]
  cloud: string[]
  tools: string[]
  soft: string[]
}

export interface Experience {
  id: string
  position: string
  company: string
  location: string
  type: string
  duration: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  image: string
  github: string
  demo: string | null
  featured: boolean
  status: string
}

export interface Contact {
  title: string
  description: string
  email: string
  socialLinks: {
    platform: string
    url: string
    icon: string
  }[]
}

export interface Education {
  degree: string
  school: string
  duration: string
  gpa: string
  coursework: string[]
}

export interface PortfolioData {
  profile: Profile
  bio: Bio
  skills: Skills
  experience: Experience[]
  projects: Project[]
  contact: Contact
  education: Education
}