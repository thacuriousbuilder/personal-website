import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alhouseny Camara',
  description: 'Cybersecurity professional, indie app builder, and curious mind exploring the intersection of technology and human possibilities.',
  keywords: ['cybersecurity', 'indie apps', 'software engineering', 'book reviews', 'technology'],
  authors: [{ name: 'Alhouseny Camara' }],
  creator: 'Alhouseny Camara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alhousenycamara.com',
    title: 'Alhouseny Camara - Cybersecurity & Indie Apps',
    description: 'Cybersecurity professional, indie app builder, and curious mind exploring the intersection of technology and human possibilities.',
    siteName: 'Alhouseny Camara',
  },
  twitter: {
    card: 'summary',
    title: 'Alhouseny Camara - Cybersecurity & Indie Apps',
    description: 'Cybersecurity professional, indie app builder, and curious mind exploring the intersection of technology and human possibilities.',
    creator: '@thacuriousb',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}