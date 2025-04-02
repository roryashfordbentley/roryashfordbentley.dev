import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Grid, GridItem } from '@components/Grid/Grid'
import { Container, ContainerItem } from '@components/Container/Container'
import { Footer } from './Footer'

import styles from './Footer.module.css'
import Image from 'next/image'

const today = new Date()

export async function FooterContainer() {
  const payload = await getPayload({ config: configPromise })

  const footerData = await payload.findGlobal({
    slug: 'Footer', // TODO - change case of this slug without breaking the Payload content
  })

  const contactTitle = footerData.footerContactTitle || 'Contact'
  const email = footerData.footerContactEmail || ''
  const socialTitle = footerData.footerSocialTitle || 'Find me on'
  const socialLinks = footerData.footerSocialLinksList || []
  const toolsTitle = footerData.footerToolsTitle || 'Built with'
  const tools = footerData.footerToolsList || []

  return (
    <Footer
      contactTitle={contactTitle}
      email={email}
      socialTitle={socialTitle}
      socialLinks={socialLinks}
      toolsTitle={toolsTitle}
      tools={tools}
    />
  )
}
