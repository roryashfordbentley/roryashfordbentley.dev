import { GlobalConfig } from 'payload'

export const NavPrimary: GlobalConfig = {
  slug: 'navPrimary',
  label: 'Primary Nav',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      maxRows: 5,
      fields: [
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
