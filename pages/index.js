import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import HeroImage from '../components/HeroImage'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import ContactMe from '../components/ContactMe'


export default function Home() {
  return (
    <div>
      <Head>
      <title>Eve Drake -  Web Development</title>
      <meta name='Eve Drake - Web Developement' content='Portfolio by Eve Drake' />
      <link rel='icon' href='https://www.svgrepo.com/show/250452/coding-html.svg'/>
      </Head>
      <Nav />
      <HeroImage />
      <About />
      <Portfolio />
      <ContactMe />
    </div>

  )
}
