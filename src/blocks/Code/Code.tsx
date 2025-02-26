import type { Block } from 'payload'

export const CodeBlock: Block = {
  slug: 'code', // required
  fields: [
    // required
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
