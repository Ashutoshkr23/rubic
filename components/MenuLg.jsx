import React, { useContext } from "react";
import { DarkModeContext , SwapActiveContext } from "../components/Context";

function MenuLg() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { swapActive } = useContext(SwapActiveContext);
  return (
    <div>
      <div className={`lg:hidden`}>
        <div className={`w-56 border rounded-2xl border-slate-600 ${isDarkMode ? "bg-bg-grey" : "bg-bg-white-dim"}`}>
          <div className={`  py-6' w-56 `}>
            <div className='flex px-7 py-4 flex-col'>
{/* 
              <a href="https://rubic.exchange/widget?_ga=2.61088044.1409416818.1675153611-1603743717.1674651356" className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4 " src={isDarkMode ? "./icon-1.svg " : " ./icon-1-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>Setup Widget</h3>
              </a> */}
              {/* <a href="https://tools.rubic.exchange/sdk?_ga=2.158041274.1409416818.1675153611-1603743717.1674651356" className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-2.svg " : " ./icon-2-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>SDK</h3>
              </a> */}
              <a href="https://alphamintlabs.com" className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-3.svg " : " ./icon-3-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>Contact Us</h3>
              </a>
              <a href="https://alphamintlabs.com" className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-4.svg " : " ./icon-4-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>FAQ</h3>
              </a>
              {/* <a href="https://claim.rubic.exchange/?_ga=2.102303873.1409416818.1675153611-1603743717.1674651356" className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-5.svg " : " ./icon-5-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>Token Claim</h3>
              </a> */}
            </div>

          </div>
          <div className="border-y border-y-black">
            <button className={`btn px-7 text-left border-0 py-3.5 w-full rounded-full bg-transparent ${isDarkMode ? "hover:bg-bg-grey-light" : "hover:bg-white"}`}><p className={`text-${isDarkMode ? "white" : "black"}`}>Swaps</p></button>
          </div>
          <div className="py-2"><button className='w-44 h-12 mx-8 border border-red-500 px-6 bg-transparent text-black rounded-full'><p className={`text-${isDarkMode ? "white" : "black"}`}>Connect Wallet</p></button></div>
        </div>
      </div>

      
      <div className={`hidden lg:block`}>
        <div className={` border rounded-2xl border-slate-600 py-6' w-56 ${isDarkMode ? "bg-bg-grey" : "bg-bg-white-dim"}`}>
          <div className='flex px-7 py-4 flex-col'>

            {/* <a href="https://rubic.exchange/widget?_ga=2.61088044.1409416818.1675153611-1603743717.1674651356" className='flex h-11  items-center flex-column'>
              <img className="h-5 w-5 mr-4 " src={isDarkMode ? "./icon-1.svg " : " ./icon-1-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green `}>Setup Widget</h3>
            </a>
            <a href="https://tools.rubic.exchange/sdk?_ga=2.158041274.1409416818.1675153611-1603743717.1674651356"  className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-2.svg " : " ./icon-2-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>SDK</h3>
            </a> */}
            <a href="https://alphamintlabs.com" className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-3.svg " : " ./icon-3-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>Contact Us</h3>
            </a>
            <a href="https://alphamintlabs.com" className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-4.svg " : " ./icon-4-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>FAQ</h3>
            </a>
            {/* <a href="https://claim.rubic.exchange/?_ga=2.102303873.1409416818.1675153611-1603743717.1674651356" className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-5.svg " : " ./icon-5-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"} hover:text-f-green`}>Token Claim</h3>
            </a> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default MenuLg
