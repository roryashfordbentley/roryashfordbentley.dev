import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Grid, GridItem } from '@components/Grid/Grid'
import { Container, ContainerItem } from '@components/Container/Container'

import styles from './Footer.module.css'
import Image from 'next/image'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import { LogoLink } from '@components/LogoLink/LogoLink'
import { PageWrapper } from '@components/PageWrapper/PageWrapper'

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
      <PageWrapper>
        <div className={styles.inner}>
          <div className={styles.copyright}>
            <figure className={styles.logo}>
              <LogoLink link="/" />
            </figure>

            <span className={styles.copyrightText}>
              &copy; {today.getFullYear()} — Rory Ashford-Bentley
            </span>
          </div>

          <div className={styles.buildInfo}>
            <span className={styles.buildInfoText}>Built with:</span>

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
                        /** HACK: this find/replace allows use to load images directly
                         * from the public folder and not via API which requires media
                         * to be on a remote store. As these are icons it should be OK
                         * but could do with a refactor probably.
                         **/

                        <InlineSVG
                          svgPath={
                            tool.footerToolsIcon.url?.replace('/api/icons/file/', './icons/') || ''
                          }
                        />
                      )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageWrapper>
    </footer>
  )
}
