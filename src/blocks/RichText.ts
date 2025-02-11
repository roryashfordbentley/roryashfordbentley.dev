import type { Block } from 'payload'

export const RichTextBlock: Block = {
  slug: 'RichTextBlock', // required
  fields: [
    {
      name: 'richTextHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'richTextEditor',
      type: 'richText',
      required: true,
    },
  ],
}
