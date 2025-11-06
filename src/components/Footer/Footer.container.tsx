import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Footer } from './Footer'

const today = new Date()

export async function FooterContainer() {
  const payload = await getPayload({ config: configPromise })

  const footerData = await payload.findGlobal({
    slug: 'Footer', // TODO - change case of this slug without breaking the Payload content
  })

  const contactTitle = footerData.footerContactTitle || 'Contact'
  const toolsTitle = footerData.footerToolsTitle || 'Built with'
  const tools = footerData.footerToolsList || []

  return <Footer contactTitle={contactTitle} toolsTitle={toolsTitle} tools={tools} />
}
