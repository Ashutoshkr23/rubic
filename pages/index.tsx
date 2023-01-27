import type { NextPage } from 'next'
import Main from '../components/Main'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className='bg-bg-black'>
      <Head>
        <title>Cross-Chain Tech Aggregator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
