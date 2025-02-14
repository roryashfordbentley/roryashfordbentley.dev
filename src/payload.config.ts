// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collection Imports
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
  globals: [Settings, NavPrimary, SocialMediaLinks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Automatically uses proces.env.POSTGRES_URL if no options are provided.
  //db: vercelPostgresAdapter(),
  // Optionally, can accept the same options as the @vercel/postgres package.
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
