import React, { useState } from 'react';

function NavSettingsLg() {
    const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
          <div className='bg-bg-grey-div rounded-box px-5 py-4' style={{ height: '201px', width: '686px', }}>
              <div>
                  <div className="flex justify-between">
                      <p className="text-white">Settings</p>
                      <img src="./Close.svg" alt="image" className="w-4 h-4 rounded-full" />
                  </div>
              </div>
              <div>
                  <div className='flex flex-row items-center gap-2.5'>
                      <div className="px-4 py-5 bg-bg-grey-option rounded-xl mt-3" style={{ height: '130px', width: '154px', }}>
                          <div className="flex justify-between">
                              <img src="./moon.svg" alt="image" className="w-4 h-4 " />
                              <label className="relative inline-flex items-center ">
                                  <input
                                      type="checkbox"
                                      className="hidden"
                                      checked={isToggled}
                                      onChange={() => setIsToggled(!isToggled)}
                                  />
                                  <span className={`toggle-slider rounded-full w-12 h-6 shadow-inner ${isToggled ? 'bg-white' : 'bg-bg-green'
                                      }`}></span>
                                   <span
                                      className={`toggle-button absolute w-4 h-4 my-1 rounded-full bg-black shadow inset-y-0 transition-all duration-200 ease-in-out ${isToggled ? 'left-1 ' : 'right-1'
                                          }`}
                                  ></span>
                              </label>
                          </div>
                          <h3 className='text-white pt-5 font-bold'>Switch Theme</h3>
                          <h5 className='text-neutral-300 pt-1 text-sm'>Theme for web</h5>
                      </div>
                      <div className="px-4 py-5 bg-bg-grey-option rounded-xl mt-3" style={{ height: '130px', width: '154px', }}>
                          <div className="flex justify-between">
                              <img src="./English.svg" alt="image" className="w-8 h-8 " />
                              <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                          </div>
                          <h3 className='text-white pt-3 font-bold'>Language</h3>
                          <h5 className='text-neutral-300 pt-1 text-sm'>Choose Language</h5>
                      </div>
                      <div className="px-4 py-5 bg-bg-grey-option rounded-xl mt-3" style={{ height: '130px', width: '154px', }}>
                          <div className="flex justify-between">
                              <img src="./gas.svg" alt="image" className="w-8 h-8 " />
                              <h5 className='text-neutral-300 pt-1 text-base'>14.70</h5>
                          </div>
                          <h3 className='text-white pt-3 font-bold'>Gas Price</h3>
                          <h5 className='text-neutral-300 pt-1 text-sm'>In Etherium chain</h5>
                      </div>
                      <div className="px-4 py-5 bg-bg-grey-option rounded-xl mt-3" style={{ height: '130px', width: '154px', }}>
                          <div className="flex justify-between">
                              <img src="./education.svg" alt="image" className="w-8 h-8 " />
                              <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                          </div>
                          <h3 className='text-white pt-3 font-bold'>Tutorials</h3>
                          <h5 className='text-neutral-300 pt-1 text-sm'>How to use</h5>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default NavSettingsLg
