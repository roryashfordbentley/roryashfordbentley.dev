import { getPayload } from 'payload'
import { RenderBlocks } from '@blocks/RenderBlocks'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { notFound } from 'next/navigation'

/**
 * Blocks
 */
import { CodeBlockSchema } from '@/blocks/Code/Schema'

/**
 * Components
 */
import { Prose } from '@components/Prose/Prose'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import { LivePreviewListener } from '@components/utils/LivePreviewListener'
import { Container, ContainerItem } from '@components/Container/Container'
import { BlogArticleTitle } from '@/components/BlogArticleTitle/BlogArticleTitle'

/**
 * Load the blog post data from Payload
 */
async function getBlogPost(slug: string) {
  const payload = await getPayload({ config: configPromise })

  const post = await payload.find({
    collection: 'posts',
    limit: 1,
    pagination: false,
    draft: true, // Required for live preview
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return post.docs[0]
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const postData = await getBlogPost(slug)

  if (!postData) {
    return notFound() //  404 page
  }

  const title = postData.title || ''
  const description = postData.description || ''
  const featuredImageData = (postData.featuredImage as Media) || ''
  const content = postData.content || ''
  const layout = postData.layout || []
  const date = postData.createdAt || ''

  const image = featuredImageData.url ? (
    <Image
      src={featuredImageData.url ?? ''}
      alt={featuredImageData?.alt ?? ''}
      width={1330}
      height={720}
    />
  ) : null

  return (
    <>
      <LivePreviewListener />

      <Container>
        <ContainerItem layout="full">
          <BlogArticleTitle
            title={title}
            description={description}
            datePosted={date}
            readingTime="5 minutes"
            image={image}
          ></BlogArticleTitle>
        </ContainerItem>

        <ContainerItem layout="narrow">
          {content && (
            <Prose>
              <LexicalToJSX data={content} />
            </Prose>
          )}
        </ContainerItem>
      </Container>

      <RenderBlocks blocks={layout} />
    </>
  )
}
