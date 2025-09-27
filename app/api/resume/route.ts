import { NextRequest, NextResponse } from 'next/server'
import { renderToStream } from '@react-pdf/renderer'
import PDFResume from '@/components/PDFResume'
import portfolioData from '@/data/portfolio.json'

export async function GET(request: NextRequest) {
  try {
    const stream = await renderToStream(PDFResume())
    
    // Generate dynamic filename
    const { profile } = portfolioData
    const nameForFile = profile.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '')
    const filename = `${nameForFile}_Resume.pdf`
    
    return new NextResponse(stream as unknown as ReadableStream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}