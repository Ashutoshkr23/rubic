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
          <a href="https://www.facebook.com/RubicDEX/" target="blank" className="w-11 h-8">
            <img className="w-6 h-6 hover:scale-125 inline-block" src={isDarkMode ? "./fb.svg " : " ./fb-black.svg "} alt="icon" />
          </a>
          <a href="https://twitter.com/CryptoRubic" target="blank" className="w-11 h-8">
            <img className="w-6 h-6 hover:scale-125 inline-block" src={isDarkMode ? "./twitter.svg " : " ./Twitter-black.svg "} alt="icon" />
          </a>
          <a href="https://www.reddit.com/r/Rubic/new/" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./reddit.svg " : " ./Reddit-black.svg "} alt="icon" className=" w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://t.me/cryptorubic_chat" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./telegram.svg " : " ./Telegram-black.svg "} alt="icon" className=" w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://dune.com/rubic_exchange/rubic-general-dashboard" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./dune.svg " : " ./Dune-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="mailto:support@rubic.finance" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./mail.svg " : " ./Email-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://cryptorubic.medium.com/" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./medium.svg " : " ./Medium-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://discord.gg/7EYzPbWKFQ" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./discord.svg " : " ./Discord-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://coinmarketcap.com/currencies/rubic" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./coinmarket.svg " : " ./Coinmarket-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://www.coingecko.com/en/coins/rubic" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./coingecko.svg " : " ./Coingecko-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>
          <a href="https://www.youtube.com/c/RubicExchange" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./youtube.svg " : " ./Youtube-black.svg "} alt="icon" className="w-6 h-6inline-block hover:scale-125" />
          </a>
          <a href="https://www.defipulse.com/" target="blank" className="w-11 h-8">
            <img src={isDarkMode ? "./defi-pulse.svg " : " ./DeFi-Pulse-black.svg "} alt="icon" className="w-6 h-6 inline-block hover:scale-125" />
          </a>



        </div>
        <div className=" flex flex-row flex-wrap justify-center items-center pb-16 " style={{ height: '80px', width: '320px', borderRadius: '19px', margin: 'auto' }}>
          <p className='mx-2'>© Copyright Rubic 2023,</p>
          <a href="#" className='text-f-green hover:underline'>Privacy Policy</a>
          <p className='mx-2'> | </p>
          <a href="#" className='text-f-green hover:underline'>Terms of Service</a>
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
          <a href="https://www.facebook.com/RubicDEX/" target="blank" className="w-11 h-10">
            <img className="w-6 h-6 hover:scale-125 inline-block" src={isDarkMode ? "./fb.svg " : " ./fb-black.svg "} alt="icon" />
          </a>
          <a href="https://twitter.com/CryptoRubic" target="blank" className="w-11 h-10">
            <img className="w-6 h-6 hover:scale-125 inline-block" src={isDarkMode ? "./twitter.svg " : " ./Twitter-black.svg "} alt="icon" />
          </a>
          <a href="https://www.reddit.com/r/Rubic/new/" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./reddit.svg " : " ./Reddit-black.svg "} alt="icon" className=" w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://t.me/cryptorubic_chat" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./telegram.svg " : " ./Telegram-black.svg "} alt="icon" className=" w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://dune.com/rubic_exchange/rubic-general-dashboard" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./dune.svg " : " ./Dune-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="mailto:support@rubic.finance" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./mail.svg " : " ./Email-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://cryptorubic.medium.com/" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./medium.svg " : " ./Medium-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://discord.gg/7EYzPbWKFQ" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./discord.svg " : " ./Discord-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://coinmarketcap.com/currencies/rubic" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./coinmarket.svg " : " ./Coinmarket-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://www.coingecko.com/en/coins/rubic" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./coingecko.svg " : " ./Coingecko-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://www.youtube.com/c/RubicExchange" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./youtube.svg " : " ./Youtube-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>
          <a href="https://www.defipulse.com/" target="blank" className="w-11 h-10">
            <img src={isDarkMode ? "./defi-pulse.svg " : " ./DeFi-Pulse-black.svg "} alt="icon" className="w-6 h-6 hover:scale-125 inline-block" />
          </a>


        </div>
        <div className=" flex flex-row items-center pb-16 " style={{ height: '80px', width: '420px', borderRadius: '19px', margin: 'auto' }}>
          <p className='mx-2'>© Copyright Rubic 2023,</p>
          <a href="https://rubic.exchange/pdf/RubicPrivacyPolicy.pdf?_ga=2.161751228.1409416818.1675153611-1603743717.1674651356" className='text-f-green hover:underline'>Privacy Policy</a>
          <p className='mx-2'> | </p>
          <a href="https://rubic.exchange/pdf/TermsOfService.pdf?_ga=2.259164554.1409416818.1675153611-1603743717.1674651356" className='text-f-green hover:underline'>Terms of Service</a>
        </div>
      </div>

    </div>
  )
}

export default Footer
