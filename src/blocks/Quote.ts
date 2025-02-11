import type { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'QuoteBlock', // required
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}
