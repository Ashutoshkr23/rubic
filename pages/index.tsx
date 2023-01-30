import type { NextPage } from 'next'
import Main from '../components/Main'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Demo from '../components/Demo'

const Home: NextPage = () => {
  return (
    <div className='bg-bg-black'>
      <Head>
        <title>Rubic - Cross-Chain Tech Aggregator</title>
        <link rel="icon" href="/icon-5.svg" />
      </Head>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
