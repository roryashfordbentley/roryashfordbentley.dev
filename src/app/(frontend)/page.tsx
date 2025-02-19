import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'

//import type { Payload } from 'payload'

/*const getPosts = async (payload: Payload) => {
  const posts = await payload.find({
    collection: 'posts',
  })

  return posts
}*/

const logoInstance = <LogoLink link="/" />

// Temp until we pull live data from Payload
const navInstance = (
  <MainNav
    navItems={[
      {
        id: 1,
        page: {
          slug: 'home',
          title: 'Home',
        },
      },
      {
        id: 2,
        page: {
          slug: 'work',
          title: 'Work',
        },
      },
      {
        id: 3,
        page: {
          slug: 'blog',
          title: 'Blog',
        },
      },
    ]}
  />
)

var themeToggleInstance = <ThemeToggle />

const HomePage = () => {
  return (
    <>
      <Header logo={logoInstance} navMenu={navInstance} themeToggle={themeToggleInstance} />
      <main>HelloWorld</main>
      <Footer />
    </>
  )
}

export default HomePage
