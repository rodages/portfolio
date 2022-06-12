import '../styles/globals.css'
import Layout from '../components/Layout'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <>
      <Navbar />
      <Hero />
      <About {...pageProps} />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

    </>

  )
}

export default MyApp
