import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pathlight - Empowering the Blind Community',
  description: 'Smart glasses that empower the blind community with confident, independent navigation. Plus Social Memory for sighted users.',
  keywords: ['assistive technology', 'blind navigation', 'smart glasses', 'accessibility', 'blind community', 'spatial audio', 'AI navigation', 'social memory', 'face recognition'],
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
    title: 'Pathlight - Empowering the Blind Community',
    description: 'Smart glasses that empower the blind community with confident, independent navigation. Plus Social Memory for sighted users.',
    url: 'https://pathlightproj.com',
    siteName: 'Pathlight',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pathlight - Empowering the Blind Community',
    description: 'Smart glasses that empower the blind community with confident, independent navigation. Plus Social Memory for sighted users.',
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
