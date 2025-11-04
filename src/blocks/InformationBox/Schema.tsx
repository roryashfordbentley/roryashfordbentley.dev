import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const InformationBoxBlockSchema: Block = {
  slug: 'informationBox',
  imageAltText: 'Information Box block screenshot',
  fields: [
    layoutField,
    {
      name: 'informationBoxContent',
      type: 'richText',
      label: 'Content',
    },
  ],
}
