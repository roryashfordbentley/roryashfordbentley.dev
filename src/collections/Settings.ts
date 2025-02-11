import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'Settings',
  fields: [
    {
      name: 'siteTitle',
      label: 'Site Title',
      type: 'text',
      admin: {
        description:
          'The Site title is used in the page meta title and can also be used to display the site title in the header, footer or anywhere else within the site.',
        placeholder: 'E.g. "My Website Name"',
      },
    },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      admin: {
        description:
          'Add some text that is typically used in the footer of the site to indicate copyright. If you wish to include the date it is recommended to do this in code, not typed here.',
        placeholder: 'E.g. "© My Website Name"',
      },
    },
  ],
}
