import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const {{pascalCase name}}BlockSchema: Block = {
  slug: '{{camelCase name}}',
  imageURL: './block-previews/block-preview-file.jpg',
  imageAltText: '{{pascalCase name}} block screenshot',
  fields: [
    layoutField,
    {
      name: '{{camelCase name}}BlockCode',
      type: 'text',
      label: false,
    },
  ],
}