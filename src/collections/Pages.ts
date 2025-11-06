import type { CollectionConfig } from 'payload'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
import { populatePublishedAt } from './hooks/populatePublishedAt'

import { CodeBlockSchema } from '@blocks/Code/Schema'
import { HeroBlockSchema } from '@blocks/Hero/Schema'
import { ProseBlockSchema } from '@blocks/Prose/Schema'
import { BigImageBlockSchema } from '@blocks/BigImage/Schema'
import { InformationBoxBlockSchema } from '@blocks/InformationBox/Schema'

import { slugField } from '@/fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        CodeBlockSchema,
        HeroBlockSchema,
        ProseBlockSchema,
        BigImageBlockSchema,
        InformationBoxBlockSchema,
      ],
    },
    ...slugField(),
  ],
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      // or where `_status` does not exist
      return {
        or: [
          {
            _status: {
              equals: 'published',
            },
          },
          {
            _status: {
              exists: false,
            },
          },
        ],
      }
    },
  },
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
