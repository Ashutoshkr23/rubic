import React, { useState , useContext} from 'react';
import NavbarSettingsLg from '../components/NavSettingsLg'
import NavbarSettingSm from '../components/NavSettingSm'
import MenuLg from '../components/MenuLg';
import { DarkModeContext } from "../components/Context";


function Navbar() {


  const [visible1, setVisible1] = useState(false);

  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setVisible(!visible);
  };
  

  

  


 


  return (
    <div >
      {/*For mobile and tablet*/}
      <div className='lg:hidden'>
        <div className='navbar px-4 py-8 bg-bg-black flex justify-items-end max-width-full'>
          <img className="mr-10 h-10 w-32" src='./rubic-logo.svg' />

          <button className='w-24 h-12 px-2 py-3 ml-auto mr-4 bg-bg-grey rounded-full text-white'> <img className='w-4 h-4' src='./rubic-light.svg' /><div className='ml-1'>Buy RBC</div></button>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12' onClick={() => setVisible1(!visible1)} >
              <img div className='w-6 h-6' src="./setting.svg" />
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible1 ? 'block' : 'hidden'}`}>
              <NavbarSettingSm/>
            </div>
          </div>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12 ' onClick={handleClick} >
              <div className="relative btn btn-circle bg-transparent">
                <div className='  h-3.5 w-5'>
                  <div
                    className={`bg-white h-0.5 w-5 origin-top-left rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                  />
                  <div
                    className={`bg-white h-0.5 w-5 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                  />
                  <div
                    className={`bg-white h-0.5 w-5  rounded-md mt-1 ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                  />
                </div>
              </div>
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
              <MenuLg />
            </div>
          </div>


          
        </div>
      </div>


      {/*for large screen */}
      <div className='hidden lg:block'>
        <div className='navbar px-8 py-8 bg-bg-black flex justify-items-end max-width-full'>
          <img className="mr-10 h-10 w-32" src='./rubic-logo.svg' />

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12 ' onClick={handleClick} >
              <div className="relative btn btn-circle bg-transparent">
                <div className='  h-3.5 w-5'>
                  <div
                    className={`bg-white h-0.5 w-5 origin-top-left rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                  />
                  <div
                    className={`bg-white h-0.5 w-5 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                  />
                  <div
                    className={`bg-white h-0.5 w-5  rounded-md mt-1 ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                  />
                </div>
              </div>
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
              <MenuLg />
            </div>
          </div>

          
          <div className="absolute inset-x-1/4" style={{ width: '565px', }}>
            <button className='btn px-5 border-0 py-3.5 text-white rounded-full bg-bg-black'>Swaps</button>
          </div>
          <button className='w-44 h-12 px-9 py-3 ml-auto bg-bg-grey rounded-full text-white'> <img className='w-5 h-6' src='./rubic-light.svg' /><div className='ml-2'>Buy RBC</div></button>

          <div>
            <button className='w-44 h-12 mx-8 px-9 bg-bg-green text-black rounded-full'>connect wallet</button>
          </div>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12' onClick={() => setVisible1(!visible1)} >
              <img div className='w-6 h-6' src="./setting.svg" />
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible1 ? 'block' : 'hidden'}`}>
              <div>
                <NavbarSettingsLg/>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar
