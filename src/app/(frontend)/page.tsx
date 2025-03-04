import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { ButtonLink } from '@components/ButtonLink/ButtonLink'
import { Hero } from '@components/Hero/Hero'

//import type { Payload } from 'payload'

/*const getPosts = async (payload: Payload) => {
  const posts = await payload.find({
    collection: 'posts',
  })

  return posts
}*/

const title = 'Rory Ashford-Bentley.'
const subtitle = 'Full-Stack Engineer.'
const description =
  'Passionate about creating digital solutions that make meaningful change and have a positive social impact.'
const buttonUrl = 'https://www.google.com'
const button = <ButtonLink url={buttonUrl} label="Get in Touch" />

const HomePage = () => {
  return (
    <>
      <Hero title={title} subtitle={subtitle} description={description} button={button} />
      <main>HelloWorld</main>
      <Footer />
    </>
  )
}

export default HomePage
