import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'

//import type { Payload } from 'payload'

/*const getPosts = async (payload: Payload) => {
  const posts = await payload.find({
    collection: 'posts',
  })

  return posts
}*/

const HomePage = () => {
  return (
    <>
      <Header />
      <main>HelloWorld</main>
      <Footer />
    </>
  )
}

export default HomePage
