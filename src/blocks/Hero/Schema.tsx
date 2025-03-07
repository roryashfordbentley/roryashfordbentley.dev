import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const HeroBlockSchema: Block = {
  slug: 'hero',
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
      type: 'textarea',
      required: true,
    },
    {
      name: 'heroBlockButtonText',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'heroBlockButtonLink',
      label: 'Button Link (URL)',
      type: 'text',
      required: true,
    },
  ],
}
