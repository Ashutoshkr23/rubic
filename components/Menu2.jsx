import React from 'react'

function Menu2() {
  return (
    <div>
          <div className='bg-bg-grey-settings border rounded-2xl border-slate-600 py-6 w-80 h-68 '>
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
                      <input type="checkbox" className="toggle ml-auto" checked />
                  </div>


              </div>

          </div>
    </div>
  )
}

export default Menu2
