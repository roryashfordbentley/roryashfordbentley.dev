import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const VideoEmbedBlockSchema: Block = {
  slug: 'videoEmbed',
  imageURL: '/block-previews/block-preview-file.jpg',
  imageAltText: 'VideoEmbed block screenshot',
  fields: [
    layoutField,
    {
      name: 'videoEmbedURL',
      type: 'text',
      label: 'Video Embed URL',
    },
  ],
}
