import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Grid, GridItem } from '@components/Grid/Grid'
import { Container, ContainerItem } from '@components/Container/Container'

import styles from './Footer.module.css'
import Image from 'next/image'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'

const today = new Date()

export function Footer(props: {
  contactTitle: string
  email: string
  socialTitle: string
  socialLinks: Array<any>
  toolsTitle: string
  tools: Array<any>
}) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <ContainerItem layout="wide">
          <Grid columns={1} columnsMedium={3}>
            <GridItem columnSpan={1} columnSpanMedium={2}>
              <div className={styles.contact}>
                <h2 className={styles.title}>{props.contactTitle}</h2>

                <p className={styles.email}>
                  <a href={`mailto:${props.email}`}>{props.email}</a>
                </p>
              </div>
            </GridItem>

            <GridItem columnSpan={1} columnSpanMedium={1}>
              <div className={styles.tools}>
                <h2 className={styles.title}>{props.toolsTitle}</h2>

                <ul className={styles.toolsList}>
                  {props.tools.map((tool, index) => (
                    <li className={styles.tool} key={index}>
                      <a
                        href={tool.footerToolsLink || ''}
                        title={tool.footerToolsTitle || ''}
                        aria-label={tool.footerToolsTitle || 'Tool link'}
                      >
                        {tool.footerToolsIcon &&
                          typeof tool.footerToolsIcon !== 'string' &&
                          tool.footerToolsIcon.url && (
                            /* HACK: this find/replace allows use to load images directly from the public folder and not via API which requires media to be on a remote store. As these are icons it should be OK but could do with a refactor probably. */

                            <InlineSVG
                              svgPath={
                                tool.footerToolsIcon.url?.replace('/api/icons/file/', './icons/') ||
                                ''
                              }
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
                <h2 className={styles.title}>{props.socialTitle}</h2>

                <ul className={styles.socialList}>
                  {props.socialLinks.map((socialLink, index) => (
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
