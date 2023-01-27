import React from 'react'

function Footer() {
  const images = ["./Dollar.svg","./setting.svg"];
  return (
    <div className='bg-bg-black'>
      <div className=" flex flex-row  items-center"style={{ height: '40px', width: '380px', borderRadius: '19px', margin: 'auto', }}>
              <img className='h-5 w-5' src='./Dollar.svg'/>
              <p className='mx-2'>Accumulated Transaction Volume:</p>
              <p className='text-f-green'>$306,002,189</p>
      </div>
      <div className="flex flex-row mx-auto my-4 min-w-0 items-center" style={{ height: '40px', width: '528px', borderRadius: '19px', margin: 'auto' }}>
        <div className="w-11 h-10">
          <img className="w-6 h-6 inline-block" src="./fb.svg"  alt="icon"  />
        </div>
        <div className="w-11 h-10">
          <img className="w-6 h-6 inline-block"  src="./twitter.svg" alt="icon"  />
        </div>
        <div className="w-11 h-10">
          <img src="./reddit.svg" alt="icon" className=" w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./telegram.svg" alt="icon" className=" w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./dune.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./mail.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./medium.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./discord.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./coinmarket.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./coingecko.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./youtube.svg" alt="icon" className="w-6 h-6inline-block" />
        </div>
        <div className="w-11 h-10">
          <img src="./defi-pulse.svg" alt="icon" className="w-6 h-6 inline-block" />
        </div>
        

        
      </div>
      <div className=" flex flex-row items-center pb-16 " style={{ height: '80px', width: '420px', borderRadius: '19px', margin: 'auto' }}>
        <p className='mx-2'>© Copyright Rubic 2023,</p>
        <p className='text-f-green'>Privacy Policy</p>
        <p className='mx-2'> | </p>
        <p className='text-f-green'>Terms of Service</p>
      </div>
    </div>
  )
}

export default Footer
