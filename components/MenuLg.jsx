import React, { useContext } from "react";
import { DarkModeContext } from "../components/Context";

function MenuLg() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div>
          <div className='bg-bg-grey border rounded-2xl border-slate-600 py-6' style={{  width: '231px', }}>
        <div className='flex px-7 py-4 flex-col'>

          <div className='flex h-11 items-center flex-column'>
            <img className="h-5 w-5 mr-4 " src={isDarkMode ? "./icon-1.svg " : " ./icon-1-light.svg "} />
            <h3 className='text-lg text-white'>Setup Widget</h3>
          </div>
          <div className='flex h-11 items-center flex-column'>
            <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-2.svg " : " ./icon-2-light.svg "} />
              <h3 className='text-lg text-white'>SDK</h3>
            </div>
          <div className='flex h-11 items-center flex-column'>
            <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-3.svg " : " ./icon-3-light.svg "} />
            <h3 className='text-lg text-white'>Team</h3>
          </div>
          <div className='flex h-11 items-center flex-column'>
            <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-4.svg " : " ./icon-4-light.svg "} />
            <h3 className='text-lg text-white'>FAQ</h3>
          </div>
          <div className='flex h-11 items-center flex-column'>
            <img className="h-5 w-5 mr-4" src={isDarkMode ? "./icon-5.svg " : " ./icon-5-light.svg "} />
            <h3 className='text-lg text-white'>Token Claim</h3>
          </div>
          

           </div>

      </div>
    </div>
  )
}

export default MenuLg
