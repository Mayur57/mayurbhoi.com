import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import GridBackdrop from 'src/components/backdrop'
import { Providers } from 'src/utils/providers'

const inter = localFont({
  src: './fonts/Inter-Variable.ttf',
  display: 'swap',
  weight: '400 600',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mayurbhoi.com'),
  title: {
    default: 'Mayur Bhoi',
    template: '%s • Mayur Bhoi',
  },
  description: 'Developer, designer, creator.',
  openGraph: {
    title: 'Mayur Bhoi',
    description: 'Developer, designer, creator.',
    url: 'https://mayurbhoi.com',
    siteName: 'Mayur Bhoi',
    locale: 'en_IN',
    type: 'website',
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
  twitter: {
    title: 'Mayur Bhoi',
    card: 'summary_large_image',
  },
  verification: {
    google: 'GsV_3_triVwZXNnffPNiN2nGANIvZVbi97EbnbTJ29s',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`w-full bg-[#F8F8F8] dark:bg-[#121212] transition-all duration-300 ${inter.className} antialiased`}>
        <Providers>
          <GridBackdrop />
          <main className='max-w-7xl relative min-w-full scroll-smooth'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}