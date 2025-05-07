// These styles apply to every route in the application
import '@styles/tokens/colours.css'
import '@styles/tokens/fonts.css'
import '@styles/tokens/spacing.css'
import '@styles/tokens/media-queries.css'
import '@styles/tokens/border-radius.css'
import '@styles/tokens/utility.css'
import '@styles/reset.css'
import '@styles/global.css'
import '@styles/typography.css'

import '@components/Header/Header'
import '@components/Footer/Footer'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Content } from '@components/Content/Content'
import { FooterContainer } from '@components/Footer/Footer.container'

export const metadata: Metadata = {
  title: 'R/AB website',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isLocal = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" className={inter.className}>
      <body className={isLocal ? 'dev' : ''}>
        <Content>{children}</Content>
        <FooterContainer />
      </body>
    </html>
  )
}
