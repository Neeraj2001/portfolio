import Head from 'next/head'
import portfolioData from '@/data/portfolio.json'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

const defaultMeta = {
  title: `${portfolioData.profile.name} - ${portfolioData.profile.title}`,
  description: portfolioData.bio.summary,
  url: portfolioData.profile.website,
  image: '/images/og-image.jpg'
}

export default function SEO({ 
  title = defaultMeta.title, 
  description = defaultMeta.description,
  url = defaultMeta.url,
  image = defaultMeta.image 
}: SEOProps) {
  const fullTitle = title === defaultMeta.title ? title : `${title} | ${portfolioData.profile.name}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="author" content={portfolioData.profile.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Head>
  )
}