import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const ProseBlockSchema: Block = {
  slug: 'prose',
  fields: [
    layoutField,
    {
      name: 'proseEditor',
      type: 'richText',
      required: true,
    },
  ],
}
