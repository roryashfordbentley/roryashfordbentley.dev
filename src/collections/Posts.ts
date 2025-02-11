import type { CollectionConfig } from 'payload'
import { QuoteBlock } from '@blocks/Quote'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/${data.slug}`
      },
    },
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        QuoteBlock,
      ],
    },
  ],
}
