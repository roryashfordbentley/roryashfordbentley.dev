import type { CollectionConfig } from 'payload'

export const Icons: CollectionConfig = {
  slug: 'icons',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  upload: {
    staticDir: 'public/icons',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/svg+xml'],
  },
}
