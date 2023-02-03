import React, { useContext } from "react";
import { DarkModeContext } from "../components/Context";

function Footer() {
  const images = ["./Dollar.svg", "./setting.svg"];
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className={` ${isDarkMode ? 'bg-bg-black' : 'bg-bg-white-dim'}  w-full`}>
      {/*For mobile and tablet*/}
      <div className='lg:hidden'>
        <div className=" flex flex-row flex-wrap justify-center  items-center" style={{ height: '80-px', width: '300px', borderRadius: '19px', margin: 'auto', }}>
          <img className='h-5 w-5' src={isDarkMode ? "./Dollar.svg " : " ./Dollar-black.svg "} />
          <p className='mx-2'>Accumulated Transaction Volume:</p>
          <p className='text-f-green'>$306,002,189</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '100px', width: '308px', borderRadius: '19px', margin: 'auto' }}>
          <div className="w-11 h-8">
            <img className="w-6 h-6 inline-block" src={isDarkMode ? "./fb.svg " : " ./fb-black.svg "} alt="icon" />
          </div>
          <div className="w-11 h-8">
            <img className="w-6 h-6 inline-block" src={isDarkMode ? "./twitter.svg " : " ./Twitter-black.svg "} alt="icon" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./reddit.svg " : " ./Reddit-black.svg "}  alt="icon" className=" w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./telegram.svg " : " ./Telegram-black.svg "} alt="icon" className=" w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./dune.svg " : " ./Dune-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./mail.svg " : " ./Email-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./medium.svg " : " ./Medium-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./discord.svg " : " ./Discord-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./coinmarket.svg " : " ./Coinmarket-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./coingecko.svg " : " ./Coingecko-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./youtube.svg " : " ./Youtube-black.svg "} alt="icon" className="w-6 h-6inline-block" />
          </div>
          <div className="w-11 h-8">
            <img src={isDarkMode ? "./defi-pulse.svg " : " ./Defi-Pulse-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>



        </div>
        <div className=" flex flex-row flex-wrap justify-center items-center pb-16 " style={{ height: '80px', width: '320px', borderRadius: '19px', margin: 'auto' }}>
          <p className='mx-2'>© Copyright Rubic 2023,</p>
          <p className='text-f-green'>Privacy Policy</p>
          <p className='mx-2'> | </p>
          <p className='text-f-green'>Terms of Service</p>
        </div>
      </div>



      {/*For Laptop*/}
      <div className='hidden lg:block'>
        <div className=" flex flex-row  items-center" style={{ height: '40px', width: '380px', borderRadius: '19px', margin: 'auto', }}>
          <img className='h-5 w-5' src={isDarkMode ? "./Dollar.svg " : " ./Dollar-black.svg "} />
          <p className='mx-2'>Accumulated Transaction Volume:</p>
          <p className='text-f-green'>$306,002,189</p>
        </div>
        <div className="flex flex-row flex-wrap mx-auto my-4 min-w-0 items-center" style={{ height: '40px', width: '528px', borderRadius: '19px', margin: 'auto' }}>
          <div className="w-11 h-10">
            <img className="w-6 h-6 inline-block" src={isDarkMode ? "./fb.svg " : " ./fb-black.svg "} alt="icon" />
          </div>
          <div className="w-11 h-10">
            <img className="w-6 h-6 inline-block" src={isDarkMode ? "./twitter.svg " : " ./Twitter-black.svg "} alt="icon" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./reddit.svg " : " ./Reddit-black.svg "} alt="icon" className=" w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./telegram.svg " : " ./Telegram-black.svg "} alt="icon" className=" w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./dune.svg " : " ./Dune-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./mail.svg " : " ./Email-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./medium.svg " : " ./Medium-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./discord.svg " : " ./Discord-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./coinmarket.svg " : " ./Coinmarket-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./coingecko.svg " : " ./Coingecko-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./youtube.svg " : " ./Youtube-black.svg "} alt="icon" className="w-6 h-6inline-block" />
          </div>
          <div className="w-11 h-10">
            <img src={isDarkMode ? "./defi-pulse.svg " : " ./Defi-Pulse-black.svg "} alt="icon" className="w-6 h-6 inline-block" />
          </div>


        </div>
        <div className=" flex flex-row items-center pb-16 " style={{ height: '80px', width: '420px', borderRadius: '19px', margin: 'auto' }}>
          <p className='mx-2'>© Copyright Rubic 2023,</p>
          <p className='text-f-green'>Privacy Policy</p>
          <p className='mx-2'> | </p>
          <p className='text-f-green'>Terms of Service</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
