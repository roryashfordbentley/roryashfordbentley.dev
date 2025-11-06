import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'Footer',
  fields: [
    {
      name: 'footerContactTitle',
      label: 'Contact Title',
      type: 'text',
      defaultValue: 'Contact',
    },
    {
      name: 'footerContactEmail',
      label: 'Email Address',
      type: 'text',
    },
    {
      name: 'footerSocialTitle',
      label: 'Social Links Title',
      type: 'text',
      defaultValue: 'Find me on',
    },
    {
      name: 'footerToolsTitle',
      label: 'Tools Title',
      type: 'text',
      defaultValue: 'Built with',
    },
    {
      name: 'footerToolsList',
      label: 'Tools',
      labels: {
        singular: 'Tool',
        plural: 'Tools',
      },
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'footerToolsTitle',
              label: 'Title',
              type: 'text',
            },
            {
              name: 'footerToolsLink',
              label: 'Link',
              type: 'text',
            },
            {
              name: 'footerToolsIcon',
              label: 'Icon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
}
