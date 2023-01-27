import React, { useState } from 'react';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='navbar px-8 py-8 bg-bg-black flex justify-items-end max-width-full'>
        <img className="mr-10 h-10 w-32" src='./rubic-logo.svg'/>
        <div>
          <label className="btn btn-circle swap swap-rotate">

            
            <input type="checkbox" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

          </label>
            
        </div>
        <div className="absolute inset-x-1/4"style={{ width: '565px',  }}>
                  <button className='btn px-5 py-3.5 text-white rounded-full bg-bg-black'>Swaps</button>
        </div>
             <button className='w-44 h-12 px-9 py-3 ml-auto bg-bg-grey rounded-full text-white'> <img className='w-5 h-6' src='./rubic-light.svg' /><div className='ml-2'>Buy RBC</div></button>
              
              <div>
                  <button className='w-44 h-12 mx-8 px-9 bg-bg-green text-black rounded-full'>connect wallet</button>
                  <button className='w-12 h-12'><div className='w-6 h-6'><img div className='w-6 h-6' src="./setting.svg" /></div></button>
              </div>

              <div>
                
              </div>
              
      </div>
    </div>
  )
}

export default Navbar
