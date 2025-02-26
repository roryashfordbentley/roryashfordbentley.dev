import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const CodeBlock: Block = {
  slug: 'code',
  fields: [
    layoutField,
    {
      name: 'codeBlockLabel',
      type: 'text',
    },
    {
      name: 'codeBlockCode',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
