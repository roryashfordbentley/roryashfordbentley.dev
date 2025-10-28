import { SocialNav } from '@components/SocialNav/SocialNav'

/**
 * Main Nav Container
 *
 * This container fetches the main navigation items from Payload CMS and renders
 * them using the MainNav component.
 */
export async function SocialNavContainer(props: { items: Array<any>; wide?: boolean }) {
  const socialLinks = props.items.map((item) => {
    return item
  })

  // Temp until we pull live data from Payload
  return <SocialNav items={socialLinks} wide={props.wide ?? false} />
}
