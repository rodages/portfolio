import '../styles/globals.css'
import Layout from '../components/Layout'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <div>
      <Navbar />
      <Contact />
    </div>

  )
}

export default MyApp
