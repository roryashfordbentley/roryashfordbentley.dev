import styles from './Footer.module.css'
import Image from 'next/image'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import { LogoLink } from '@components/LogoLink/LogoLink'
import { Wrapper } from '@components/Wrapper/Wrapper'
import { directUploadThingURL } from '@scripts/directUploadThingURL'

const today = new Date()

export function Footer(props: { contactTitle: string; toolsTitle: string; tools: Array<any> }) {
  return (
    <footer className={styles.wrapper}>
      <Wrapper>
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
                      tool.footerToolsIcon.url &&
                      tool.footerToolsIcon._key && (
                        <InlineSVG
                          svgPath={
                            tool.footerToolsIcon.url
                              ? directUploadThingURL(
                                  tool.footerToolsIcon.url,
                                  tool.footerToolsIcon._key,
                                )
                              : ''
                          }
                        />
                      )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
