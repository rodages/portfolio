import '../styles/globals.css'
import Layout from '../components/Layout'

import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Interests from '../components/Interests'
import Contact from '../components/Contact'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <div>
      <Navbar />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
    </div>

  )
}

export default MyApp
