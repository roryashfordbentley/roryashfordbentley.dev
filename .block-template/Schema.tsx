import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const {{pascalCase name}}BlockSchema: Block = {
  slug: {{camelCase name}},
  fields: [
    layoutField,
    {
      name: '{{pascalCase name}}BlockCode',
      type: 'text',
      label: false,
    },
  ],
}