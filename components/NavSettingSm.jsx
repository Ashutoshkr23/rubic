import React from 'react'
import { DarkModeContext } from "../components/Context";

function NavSettingSm() {
  return (
    <div>
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
  )
}

export default NavSettingSm
