import React, { useState , useContext } from 'react';
import { DarkModeContext , ShowContentContext } from "../components/Context";

function Menu2() {
    const { showContent, setShowContent } = useContext(ShowContentContext);

    
  return (
    <div>
          <div className='bg-bg-grey-settings border rounded-2xl border-slate-600  w-80 h-68 '>
              <div className='flex px-5 py-5 flex-col'>

                  <div className='flex mb-3 items-center flex-column'>
                      <h3 className='text-base text-white'>Slippage tolerence</h3>
                      <img className="h-4 w-4 ml-1.5 " src="./info.svg" />
                  </div>
                  <div class="flex mb-3 items-center">
                      <button class="bg-bg-green h-9 w-16 mr-2.5 rounded-full text-black text-base ">Auto</button>
                      <input type="text" class="bg-transparent h-8 text-right p-2 rounded-full border-white border flex-grow" value="2%" />
                  </div>
                  <div className="flex mb-3 items-center">
                      <div className="flex">
                          <h3 className="text-base text-white">Show Receivers Address</h3>
                          <img className="h-4 w-4 ml-1.5" src="./info.svg" />
                      </div>
                      <label className="relative ml-auto inline-flex items-center ">
                          <input
                              type="checkbox"
                              className="hidden"
                              checked={showContent}
                              onChange={() => setShowContent(!showContent)}
                          />
                          <span className={`toggle-slider rounded-full w-8 h-4 shadow-inner ${showContent ? 'bg-bg-green' : 'bg-slate-300'
                              }`}></span>
                          <span
                              className={`toggle-button absolute w-3 h-3 my-0.5 rounded-full bg-black shadow inset-y-0 transition-all duration-200 ease-in-out ${showContent ? 'right-0.5 ' : 'left-0.5'
                                  }`}
                          ></span>
                      </label>
                  </div>


              </div>

          </div>
    </div>
  )
}

export default Menu2
