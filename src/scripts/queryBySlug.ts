import configPromise from '@payload-config'
import { CollectionSlug, getPayload } from 'payload'

/**
 * Query By Slug
 *
 * Query a page from a collection in Payload CMS by slug.
 *
 * @param collection  The collection to query
 * @param slug  The slug of the page/post to
 * @returns
 */
const queryBySlug = async (collection: CollectionSlug, slug: String) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    //overrideAccess: false,
    draft: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
}

export default queryBySlug
