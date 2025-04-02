import { getPayload } from 'payload'
import { RenderBlocks } from '@blocks/RenderBlocks'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'

import { BlueskyFeedContainer } from '@components/BlueskyFeed/BlueskyFeed.container'
import { BlogSummary } from '@components/BlogSummary/BlogSummary'

/**
 * Load the homepage content from Payload
 *
 * Important: Hompeage must have the slug "home"
 */
async function getHomepage() {
  const payload = await getPayload({ config: configPromise })

  const post = await payload.find({
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

  return post.docs[0]
}

export default async function HomePage() {
  const postData = await getHomepage()

  //console.log(postData)
  const layout = postData?.layout || []

  return (
    <>
      <main>
        <RenderBlocks blocks={layout} />
        <BlogSummary />
        <BlueskyFeedContainer />
      </main>
    </>
  )
}
