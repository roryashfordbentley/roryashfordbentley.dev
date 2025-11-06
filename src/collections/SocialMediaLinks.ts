import { GlobalConfig } from 'payload'

export const SocialMediaLinks: GlobalConfig = {
  slug: 'socialMediaLinks',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
        {
          name: 'icon ',
          label: 'Icon',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
