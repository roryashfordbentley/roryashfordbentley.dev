import type { CollectionConfig } from 'payload'
import { QuoteBlock } from '@blocks/Quote'
import { RichTextBlock } from '@blocks/RichText'
import { slugField } from '@/fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/${data.slug}`
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
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
        RichTextBlock,
      ],
    },
    ...slugField(),
  ],
}
