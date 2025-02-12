import '@styles/tokens/colours.css'
import '@styles/tokens/fonts.css'
import '@styles/tokens/spacing.css'
import '@styles/tokens/media-queries.css'
import '@styles/tokens/border-radius.css'
import '@styles/tokens/utility.css'
import '@styles/reset.css'
import '@styles/global.css'
import '@styles/typography.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// This default export is required in a new `pages/_app.js` file.
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="R/AB" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
