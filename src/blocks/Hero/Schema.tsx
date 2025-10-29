import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const HeroBlockSchema: Block = {
  slug: 'hero',
  imageURL: '/block-previews/hero.jpg',
  imageAltText: 'Hero Box block screenshot',
  fields: [
    layoutField,
    {
      name: 'heroBlockTitle',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'heroBlockSubtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroBlockDescription',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroBlockImage',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
