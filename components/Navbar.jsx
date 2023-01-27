import React, { useState } from 'react';


function Navbar() {


  const [visible, setVisible] = useState(false);

  return (
    <div >
      {/*For mobile and tablet*/}
      <div className='lg:hidden'>
        <div className='navbar px-4 py-8 bg-bg-black flex justify-items-end max-width-full'>
          <img className="mr-10 h-10 w-32" src='./rubic-logo.svg' />

          <button className='w-24 h-12 px-2 py-3 ml-auto mr-4 bg-bg-grey rounded-full text-white'> <img className='w-4 h-4' src='./rubic-light.svg' /><div className='ml-1'>Buy RBC</div></button>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12' onClick={() => setVisible(!visible)} >
              <img div className='w-6 h-6' src="./setting.svg" />
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
              <div>
                <div className='bg-bg-grey-div rounded-box px-5 py-4' style={{ height: '541px', width: '250px', }}>
                  <div className='flex flex-col'></div>
                  <div>
                    <div className="flex justify-between">
                      <p className="text-white">Settings</p>
                      <img src="./Close.svg" alt="image" className="w-4 h-4 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-col items-center gap-px'>
                      <div className="px-4 py-4 bg-bg-grey-option rounded-xl mt-3" style={{ height: '108px', width: '211px', }}>
                        <div className="flex justify-between">
                          <img src="./moon.svg" alt="image" className="w-4 h-4 " />
                          <input type="checkbox" className="toggle toggle-success" checked />
                        </div>
                        <h3 className='text-white pt-1.5 font-bold'>Switch Theme</h3>
                        <h5 className='text-neutral-300 pt-1 text-sm'>Theme for web</h5>
                      </div>
                      <div className="px-4 py-4 bg-bg-grey-option rounded-xl mt-3" style={{ height: '116px', width: '211px', }}>
                        <div className="flex justify-between">
                          <img src="./English.svg" alt="image" className="w-8 h-8 " />
                          <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                        </div>
                        <h3 className='text-white pt-1.5 font-bold'>Language</h3>
                        <h5 className='text-neutral-300 pt-1 text-sm'>Choose Language</h5>
                      </div>
                      <div className="px-4 py-4 bg-bg-grey-option rounded-xl mt-3" style={{ height: '108px', width: '211px', }}>
                        <div className="flex justify-between">
                          <img src="./gas.svg" alt="image" className="w-8 h-8 " />
                          <h5 className='text-neutral-300 pt-1 text-base'>14.70</h5>
                        </div>
                        <h3 className='text-white pt-1.5 font-bold'>Gas Price</h3>
                        <h5 className='text-neutral-300 pt-1 text-sm'>In Etherium chain</h5>
                      </div>
                      <div className="px-4 py-4 bg-bg-grey-option rounded-xl mt-3" style={{ height: '116px', width: '211px', }}>
                        <div className="flex justify-between">
                          <img src="./education.svg" alt="image" className="w-8 h-8 " />
                          <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                        </div>
                        <h3 className='text-white pt-1.5 font-bold'>Tutorials</h3>
                        <h5 className='text-neutral-300 pt-1 text-sm'>How to use</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div>
            <label className="btn btn-circle bg-transparent border-0 swap swap-rotate">
              <input type="checkbox" />
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>
          </div>
        </div>
      </div>


      {/*for large screen */}
      <div className='hidden lg:block'>
        <div className='navbar px-8 py-8 bg-bg-black flex justify-items-end max-width-full'>
          <img className="mr-10 h-10 w-32" src='./rubic-logo.svg' />

          <div>
            <label className="btn btn-circle bg-transparent border-0 swap swap-rotate">
              <input type="checkbox" />
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>
          </div>
          <div className="absolute inset-x-1/4" style={{ width: '565px', }}>
            <button className='btn px-5 border-0 py-3.5 text-white rounded-full bg-bg-black'>Swaps</button>
          </div>
          <button className='w-44 h-12 px-9 py-3 ml-auto bg-bg-grey rounded-full text-white'> <img className='w-5 h-6' src='./rubic-light.svg' /><div className='ml-2'>Buy RBC</div></button>

          <div>
            <button className='w-44 h-12 mx-8 px-9 bg-bg-green text-black rounded-full'>connect wallet</button>
          </div>

          <div className="relative dropdown dropdown-bottom dropdown-end">
            <button className='w-12 h-12' onClick={() => setVisible(!visible)} >
              <img div className='w-6 h-6' src="./setting.svg" />
            </button>
            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
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
                          <input type="checkbox" className="toggle toggle-success" checked />
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

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar
