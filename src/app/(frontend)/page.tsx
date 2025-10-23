import { getPayload } from 'payload'
import { RenderBlocks } from '@blocks/RenderBlocks'
import configPromise from '@payload-config'

import { BlueskyFeedContainer } from '@components/BlueskyFeed/BlueskyFeed.container'
import { BlogSummaryContainer } from '@components/BlogSummary/BlogSummary.container'
import { HeaderContainer } from '@components/Header/Header.container'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import { PageWrapper } from '@components/PageWrapper/PageWrapper'
import { ContentContainer } from '@/components/ContentContainer/ContentContainer'
import { PageTitle } from '@/components/PageTitle/PageTitle'

/**
 * Load the homepage content from Payload
 *
 * Important: Hompeage must have the slug "home"
 */
async function getHomepage() {
  const payload = await getPayload({ config: configPromise })

  const page = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    draft: true, // Required for live preview
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  return page.docs[0]
}

export default async function HomePage() {
  const pageData = await getHomepage()

  const layout = pageData?.layout || []

  return (
    <>
      <main>
        <HeaderContainer light />
        <ContentContainer>
          <PageTitle title={pageData?.title ?? ''} description={pageData?.description ?? ''} />
          {pageData.content && <LexicalToJSX data={pageData.content} />}

          <RenderBlocks blocks={layout} />
        </ContentContainer>

        <RenderBlocks blocks={layout} />
        <BlogSummaryContainer />
        <BlueskyFeedContainer />
      </main>
    </>
  )
}
