import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const BigImageBlockSchema: Block = {
  slug: 'bigImage',
  fields: [
    layoutField,
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // replace 'media' with the appropriate collection slug
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'credit',
      type: 'text',
    },
    {
      name: 'creditLink',
      type: 'text',
    },
  ],
}
