import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { MainNav } from '@components/MainNav/MainNav'
import { it } from 'node:test'

/**
 * Main Nav Container
 *
 * This container fetches the main navigation items from Payload CMS and renders
 * them using the MainNav component.
 */
export async function MainNavContainer(props: { items: Array<any> }) {
  const navLinks = props.items.map((item) => {
    if (typeof item.page === 'object' && 'slug' in item.page) {
      // Special case: Home page
      if (item.page.slug === 'home') {
        item.page.slug = '/'
      } else {
        // Ensure the slug is prepended with a forward slash if it's not already an absolute path
        item.page.slug = `/${(item.page.slug ?? '').replace(/^\/+/, '')}`
      }
    }

    return item
  })

  // Temp until we pull live data from Payload
  return <MainNav navItems={navLinks} />
}
