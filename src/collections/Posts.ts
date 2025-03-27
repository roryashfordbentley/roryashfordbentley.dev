import type { CollectionConfig } from 'payload'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '@/fields/slug'

import { CodeBlockSchema } from '@blocks/Code/Schema'
import { ProseBlockSchema } from '@blocks/Prose/Schema'
import { BigImageBlockSchema } from '@blocks/BigImage/Schema'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
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
      label: 'Content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [CodeBlockSchema, ProseBlockSchema],
          }),
        ],
      }),
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true, // Allow multiple categories per post
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedPosts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true, // Allow multiple categories per post
      maxRows: 4,
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [CodeBlockSchema, ProseBlockSchema, BigImageBlockSchema],
    },
    ...slugField(),
  ],
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
