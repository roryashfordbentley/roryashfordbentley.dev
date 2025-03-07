import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const {{pascalCase name}}BlockSchema: Block = {
  slug: '{{camelCase name}}',
  fields: [
    layoutField,
    {
      name: '{{camelCase name}}BlockCode',
      type: 'text',
      label: false,
    },
  ],
}