import type { CollectionConfig } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '@/fields/slug'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import { CodeBlockSchema } from '@blocks/Code/Schema'
import { ProseBlockSchema } from '@blocks/Prose/Schema'
import { BigImageBlockSchema } from '@blocks/BigImage/Schema'
import { HeroBlockSchema } from '@blocks/Hero/Schema'
import { InformationBoxBlockSchema } from '@blocks/InformationBox/Schema'
import { GridListBlockSchema } from '@blocks/GridList/Schema'
import { VideoEmbedBlockSchema } from '@/blocks/VideoEmbed/Schema'

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
    /*{
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },*/
    {
      name: 'featuredImageWithMetadata',
      type: 'group',
      fields: [
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption (optional)',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'credit',
              type: 'text',
              label: 'Credit (optional)',
            },
            {
              name: 'creditLink',
              type: 'text',
              label: 'Credit Link (optional)',
              validate: (value: any) => {
                if (value && !/^https?:\/\/[^\s]+$/.test(value)) {
                  return 'Credit must be a valid URL if provided.'
                }
                return true
              },
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [CodeBlockSchema, BigImageBlockSchema, VideoEmbedBlockSchema],
          }),
          //FixedToolbarFeature(),
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
      blocks: [
        // required
        CodeBlockSchema,
        HeroBlockSchema,
        ProseBlockSchema,
        BigImageBlockSchema,
        InformationBoxBlockSchema,
        GridListBlockSchema,
        VideoEmbedBlockSchema,
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    //afterRead: [populateAuthors],
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
