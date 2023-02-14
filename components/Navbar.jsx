import React, { useState , useContext} from 'react';
import NavbarSettingsLg from '../components/NavSettingsLg'
import MenuLg from '../components/MenuLg';
import { DarkModeContext , SwapActiveContext } from "../components/Context";


function Navbar() {


  const [visible1, setVisible1] = useState(false);

  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);
  const { swapActive, setSwapActive } = useContext(SwapActiveContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setVisible(!visible);
  };
  

  

  


 


  return (
    <div >
      {/*For mobile and tablet*/}
      <div className='lg:hidden'>
        <div className={`navbar px-4 py-8 flex justify-items-end max-width-full ${isDarkMode ? 'bg-bg-black' : 'bg-bg-white-dim'
          }`}>
          
          <img className="mr-10 h-10 w-32" src={isDarkMode ? "./AMLlogo.png " : " ./AMLlogo.png "} />

          {/* <button className={`w-24 h-12 px-2 py-3 ml-auto rounded-full ${isDarkMode ? 'bg-bg-grey' : 'bg-white'}`}> 
             <img className='w-4 h-4' src={isDarkMode ? "./rubic-light.svg " : " ./rubic-box-light.svg "} /><div className='ml-1'><p className={`text-${isDarkMode ? "White" : "black"}`}>Buy RBC</p></div></button> */}

          <div className='ml-auto'>
          <div className=" relative dropdown ml-4 dropdown-bottom dropdown-end">
            <button className='w-12 h-12' onClick={() => setVisible1(!visible1)} >
              <img div className='w-6 h-6' src={isDarkMode ? "./setting.svg " : " ./Setting-light.svg "} />
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible1 ? 'block' : 'hidden'}`}>
              <NavbarSettingsLg visible1={visible1} setVisible1={setVisible1} />
            </div>
          </div>
          </div>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12 ' onClick={handleClick} >
              <div className={`relative btn border-none btn-circle bg-transparent ${isDarkMode ? 'hover:bg-bg-grey-light' : 'hover:bg-white'}`}>
              <div className='  h-3.5 w-5'>
                  <div
                    className={` h-0.5 w-5 origin-top-left rounded-md ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                  />
                  <div
                    className={` h-0.5 w-5 rounded-md mt-1 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'hidden' : 'block'}`}
                  />
                  <div
                    className={` h-0.5 w-5  rounded-md mt-1 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
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
      <div className='hidden lg:block ' >
        <div className={`navbar px-4 py-8 flex-row max-width-full ${isDarkMode ? 'bg-bg-black' : 'bg-bg-white-dim'
          }`}>
          <img className="mr-10 h-10 w-32" src={isDarkMode ? "./AMLlogo.png " : " /AMLlogo.png "} />

          <div className=" relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12 ' onClick={handleClick} >
                <div className={`relative btn border-none btn-circle bg-transparent ${isDarkMode ? 'hover:bg-bg-grey-light' : 'hover:bg-white'}`}>
                <div className='  h-3.5 w-5'>
                  <div
                    className={` h-0.5 w-5 origin-top-left rounded-md ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                  />
                  <div
                    className={` h-0.5 w-5 rounded-md mt-1 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'hidden' : 'block'}`}
                  />
                  <div
                    className={` h-0.5 w-5  rounded-md mt-1 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                  />
                </div>
              </div>
            </button>
            <div tabIndex={0} className={` dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
              <MenuLg />
            </div>
          </div>
  
          
          <div className="absolute inset-x-0 mx-auto " style={{ width: '565px', }}>
            <button
              className={`btn px-5 border-0 py-3.5 rounded-full   ${isDarkMode ? ` ${swapActive ? "bg-bg-grey-light" : "bg-transparent"} hover:bg-bg-grey-light` : ` ${swapActive ? "bg-white" : "bg-transparent"} hover:bg-white`}  `}
              onClick={() => setSwapActive(!swapActive)}
            >
              <p className={`text-${isDarkMode ? "white" : "black"}`}>Swaps</p>
            </button>
          </div>
          
          {/* <button className={`w-44 h-12 px-9 py-3 ml-auto rounded-full ${isDarkMode ? 'bg-bg-grey' : 'bg-white'}`}> <img className='w-5 h-6' src={isDarkMode ? "./rubic-light.svg " : " ./rubic-box-light.svg "} /><div className='ml-2'><p className={`text-${isDarkMode ? "white" : "black"}`}>Buy RBC</p></div></button> */}

          <div className='ml-auto'>
            <button className='w-44 h-12  mx-8 px-6 bg-bg-red text-black rounded-full'><p className={`text-${isDarkMode ? "black" : "white"}`}>Connect Wallet</p></button>
          </div>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12' onClick={() => setVisible1(!visible1)} >
              <img div className='w-6 h-6' src={isDarkMode ? "./setting.svg " : " ./Setting-light.svg "}  />
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible1 ? 'block' : 'hidden'}`}>
              <div>
                <NavbarSettingsLg visible1={visible1} setVisible1={setVisible1}/>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar
