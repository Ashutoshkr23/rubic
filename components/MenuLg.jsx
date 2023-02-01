import React, { useContext } from "react";
import { DarkModeContext } from "../components/Context";

function MenuLg() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div className={`lg:hidden`}>
        <div className={`w-56 border rounded-2xl border-slate-600 ${isDarkMode ? "bg-bg-grey" : "bg-bg-white-dim"}`}>
          <div className={`  py-6' w-56 `}>
            <div className='flex px-7 py-4 flex-col'>

              <div className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4 " src={isDarkMode ? "./icon-1.svg " : " ./icon-1-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Setup Widget</h3>
              </div>
              <div className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-2.svg " : " ./icon-2-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>SDK</h3>
              </div>
              <div className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-3.svg " : " ./icon-3-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Team</h3>
              </div>
              <div className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-4.svg " : " ./icon-4-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>FAQ</h3>
              </div>
              <div className='flex h-11 items-center flex-column'>
                <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-5.svg " : " ./icon-5-light.svg "} />
                <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Token Claim</h3>
              </div>
            </div>

          </div>
          <div className="border-y border-y-black">
            <button className={`btn px-7 text-left border-0 py-3.5 w-full rounded-full bg-transparent ${isDarkMode ? "hover:bg-bg-grey-light" : "hover:bg-white"}`}><p className={`text-${isDarkMode ? "white" : "black"}`}>Swaps</p></button>
          </div>
          <div className="py-2"><button className='w-44 h-12 mx-8 border border-green-500 px-6 bg-transparent text-black rounded-full'><p className={`text-${isDarkMode ? "white" : "black"}`}>Connect Wallet</p></button></div>
        </div>
      </div>

      
      <div className={`hidden lg:block`}>
        <div className={` border rounded-2xl border-slate-600 py-6' w-56 ${isDarkMode ? "bg-bg-grey" : "bg-bg-white-dim"}`}>
          <div className='flex px-7 py-4 flex-col'>

            <div className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4 " src={isDarkMode ? "./icon-1.svg " : " ./icon-1-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Setup Wi</h3>
            </div>
            <div className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-2.svg " : " ./icon-2-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>SDK</h3>
            </div>
            <div className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-3.svg " : " ./icon-3-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Team</h3>
            </div>
            <div className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-4.svg " : " ./icon-4-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>FAQ</h3>
            </div>
            <div className='flex h-11 items-center flex-column'>
              <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-5.svg " : " ./icon-5-light.svg "} />
              <h3 className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Token Claim</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MenuLg
