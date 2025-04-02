import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { BlogSummary } from './BlogSummary'

/**
 * Blog Summary Container. Handles the logic for fetching the blog posts from Payload.
 */
export async function BlogSummaryContainer() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 6,
    overrideAccess: false,
  })

  console.log(posts.docs)

  return <BlogSummary posts={posts.docs} />
}
