/**
 * Get all tags
 * Order by count
 */

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Tags } from './Tags'
import { Tag } from '@components/Tag/Tag'

export async function TagsContainer(props: { currentTag?: string; padded?: boolean }) {
  const payload = await getPayload({ config: configPromise })

  const tagResult = await payload.find({
    collection: 'tags',
  })

  const tags = tagResult.docs

  return (
    <Tags title="Tags" padded={props.padded}>
      {tags.map((tag) => {
        const active = props.currentTag === tag.slug

        return (
          <Tag
            key={tag.slug}
            label={tag.title}
            link={active ? '/blog' : `/blog?tag=${tag.slug}`}
            active={active}
          />
        )
      })}
    </Tags>
  )
}
