import queryBySlug from '@scripts/queryBySlug'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { notFound } from 'next/navigation'

import { LivePreviewListener } from '@/components/utils/LivePreviewListener'
import { LexicalToJSX } from '@/components/utils/LexicalToJSX'
import { RenderBlocks } from '@blocks/RenderBlocks'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const pageData = await queryBySlug('pages', slug)

  if (!pageData) {
    return notFound() //  404 page
  }

  const image = pageData?.featuredImage as Media
  const layout = pageData.layout || []

  return (
    <>
      <LivePreviewListener />

      <main>
        {/*pageData.content && <LexicalToJSX data={pageData.content} />*/}
        {/*image && image.url && image.alt && (
          <Image src={image.url ?? ''} alt={image.alt} width={800} height={450} />
        )*/}
        <RenderBlocks blocks={layout} />
      </main>
    </>
  )
}
