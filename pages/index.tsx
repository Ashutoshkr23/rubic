// import type { NextPage } from 'next'
import Main from '../components/Main'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Demo from '../components/Demo'


const Home = () => {
  return (
    <div className='bg-bg-black flex flex-col h-screen'>
      <Head>
        <title>AML DEX</title>
        <link rel="img" href="/AMLlogo.png" />
      </Head>
      <Navbar/>
      <Main />
      <Footer/>
    </div>
  )
}

export default Home
