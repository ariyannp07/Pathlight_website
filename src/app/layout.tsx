import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pathlight - Navigate Life. Eyes Closed.',
  description: 'Making eyesight optional. Smart glasses that guide you from point A to point B with your eyes closed.',
  keywords: ['assistive technology', 'blind navigation', 'smart glasses', 'accessibility', 'eyes closed navigation', 'spatial audio', 'AI navigation'],
  authors: [{ name: 'Pathlight Team' }],
  creator: 'Pathlight',
  publisher: 'Pathlight',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pathlightproj.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pathlight - Navigate Life. Eyes Closed.',
    description: 'Making eyesight optional. Smart glasses that guide you from point A to point B with your eyes closed.',
    url: 'https://pathlightproj.com',
    siteName: 'Pathlight',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pathlight - Smart glasses for eyes-closed navigation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathlight - Navigate Life. Eyes Closed.',
    description: 'Making eyesight optional. Smart glasses that guide you from point A to point B with your eyes closed.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sf-pro">{children}</body>
    </html>
  )
}
