import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const GridListBlockSchema: Block = {
  slug: 'gridList',
  imageURL: '/block-previews/grid-list.jpg',
  imageAltText: 'GridList block screenshot',
  fields: [
    layoutField,
    {
      name: 'gridListBlockTitle',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'gridListBlockDescription',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'gridListBlockList',
      label: 'List items',
      type: 'array',
      fields: [
        {
          name: 'gridListBlockItemImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'gridListBlockItemTitle',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'gridListBlockItemDescription',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
  ],
}
