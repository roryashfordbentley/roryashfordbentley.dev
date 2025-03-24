import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Grid, GridItem } from '@components/Grid/Grid'
import { Container, ContainerItem } from '@components/Container/Container'

import styles from './Footer.module.css'
import Image from 'next/image'

const today = new Date()

export async function Footer() {
  // TODO take business logic out and use the container/presentation pattern
  // This requires an addition file i.e. footer.container.tsx
  // we must find a way to prevent stprybook rendering containers as it will break

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
    <footer className={styles.wrapper}>
      <Container>
        <ContainerItem>
          <Grid columns={1} columnsMedium={3}>
            <GridItem columnSpan={1} columnSpanMedium={2}>
              <div className={styles.contact}>
                <h2 className={styles.title}>{contactTitle}</h2>

                <p className={styles.email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </GridItem>

            <GridItem columnSpan={1} columnSpanMedium={1}>
              <div className={styles.tools}>
                <h2 className={styles.title}>{toolsTitle}</h2>

                <ul className={styles.toolsList}>
                  {tools.map((tool, index) => (
                    <li className={styles.tool} key={index}>
                      <a
                        href={tool.footerToolsLink || ''}
                        title={tool.footerToolsTitle || ''}
                        aria-label={tool.footerToolsTitle || 'Tool link'}
                      >
                        {tool.footerToolsIcon &&
                          typeof tool.footerToolsIcon !== 'string' &&
                          tool.footerToolsIcon.url && (
                            // TODO - load SVGs as paths
                            <Image
                              className={styles.toolIcon}
                              src={tool.footerToolsIcon.url}
                              alt={tool.footerToolsIcon.alt || 'Tool Icon'}
                              width={50}
                              height={50}
                            />
                          )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </GridItem>

            <GridItem columnSpan={1} columnSpanMedium={1}>
              <div className={styles.social}>
                <h2 className={styles.title}>{socialTitle}</h2>

                <ul className={styles.socialList}>
                  {socialLinks.map((socialLink, index) => (
                    <li className={styles.socialItem} key={index}>
                      <a className={styles.socialItemLink} href={socialLink.footerSocialLink || ''}>
                        {socialLink.footerSocialTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </GridItem>
          </Grid>

          <div className={styles.copyright}>&copy; {today.getFullYear()}</div>

          <div className={styles.bigText}>
            <p className={styles.bigTextOverflow}>Rory Ashford-Bentley</p>
          </div>
        </ContainerItem>
      </Container>
    </footer>
  )
}
