import { getPayload } from 'payload'
import { RenderBlocks } from '@blocks/RenderBlocks'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'

/**
 * Blocks
 */
import { CodeBlock } from '@blocks/Code/Code'

/**
 * Components
 */
import { Prose } from '@components/Prose/Prose'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import { LivePreviewListener } from '@components/utils/LivePreviewListener'
import { Container, ContainerItem } from '@components/Container/Container'
import { BlogArticleTitle } from '@/components/BlogArticleTitle/BlogArticleTitle'
import { FeaturedImage } from '@/components/FeaturedImage/FeaturedImage'

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

  //console.log(postData)

  const title = postData.title || ''
  const description = postData.description || ''
  const featuredImageData = (postData.featuredImage as Media) || ''
  const content = postData.content || ''
  const layout = postData.layout || []
  const date = postData.createdAt || ''
  const updatedDate = postData.updatedAt || ''

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
        <ContainerItem>
          <BlogArticleTitle
            title={title}
            description={description}
            datePosted={date}
            readingTime="5 minutes"
          ></BlogArticleTitle>
        </ContainerItem>

        <ContainerItem layout="full">
          <FeaturedImage image={image} />
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
