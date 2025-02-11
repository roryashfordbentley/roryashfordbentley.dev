import { ContactWidget } from '@components/ContactWidget/ContactWidget'
const today = new Date()

export const Footer = () => {
  return (
    <footer>
      &copy; {today.getFullYear()}. All rights reserved.
      {/*<ContactWidget />*/}
    </footer>
  )
}
