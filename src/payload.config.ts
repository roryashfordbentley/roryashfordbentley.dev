// storage-adapter-import-placeholder
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collection Imports
import { Footer } from './collections/Footer'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { SocialMediaLinks } from './collections/SocialMediaLinks'

// Global Imports (*note: also stored in src/collections)
import { Settings } from './collections/Settings'
import { NavPrimary } from './collections/NavPrimary'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig }) => {
        let previewSlug = ''

        if (collectionConfig?.slug === 'posts') {
          previewSlug = `./blog/${data.slug}`
        } else if (collectionConfig?.slug === 'pages') {
          previewSlug = `./${data.slug}`
        }

        return `/${previewSlug}`
      },
      collections: ['posts', 'pages'],
    },
  },
  collections: [Posts, Pages, Users, Media],
  globals: [Settings, NavPrimary, SocialMediaLinks, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Configure the Mongoose adapter here
  db: mongooseAdapter({
    // Mongoose-specific arguments go here.
    // URL is required.
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
    /*vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),*/
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || '',
        acl: 'public-read',
      },
    }),
  ],
})
