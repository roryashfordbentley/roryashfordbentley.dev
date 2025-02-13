import queryBySlug from '@scripts/queryBySlug'
import Image from 'next/image'
import { Media } from '@/payload-types'

import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { LivePreviewListener } from '@/components/utils/LivePreviewListener'
import { LexicalToJSX } from '@/components/utils/LexicalToJSX'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const pageData = await queryBySlug('pages', slug)

  const image = pageData.featuredImage as Media

  return (
    <>
      <LivePreviewListener />
      <Header />
      <main>
        {pageData.title}
        <br />
        current slug is {slug}
        <br />
        {pageData.content && <LexicalToJSX data={pageData.content} />}
        <br />
        {image && image.url && image.alt && (
          <Image src={image.url ?? ''} alt={image.alt} width={800} height={450} />
        )}
      </main>
      <Footer />
    </>
  )
}
