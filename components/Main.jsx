import React, { useState, useEffect } from 'react';

function Main() {
    return (

        <div className='bg-bg-black w-full h-full pb-20 '>
            {/*For mobile and tablet*/}
            <div className='sm:hidden' >
                <div className='bg-bg-grey border border-slate-600 p-6' style={{ height: '440px', width: 'auto', borderRadius: '19px', margin: '20px' }}>
                    <div className="flex justify-between items-center">
                        <p className="text-lg text-white font-medium">Cross Chain Swaps</p>
                        <img src="./Settings.svg" alt="Image element" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col justify-between items-start gap-6 pt-7">
                        <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                        <p className="text-lg text-slate-600 font-medium">Enter an Amount</p>
                    </div>
                    <div className="flex flex-row py-4 items-center">
                        <div className="h-px w-60 bg-neutral-400"></div>
                        <button className="relative h-10 w-9 py-2.5 px-3 bg-bg-grey-light rounded-full">
                            <img src="./Switchswaps.svg" alt="Button Image" className=" h-5 w-2.5" />
                        </button>
                        <div className="h-px w-60 bg-neutral-400"></div>
                    </div>
                    <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                    <button className='w-full h-12 mt-8  bg-bg-green text-black rounded-full'>Select Token</button>
                </div>
            </div>
            {/*For laptop*/}
            <div className='hidden sm:block'>
                <div className='bg-bg-grey border border-slate-600 p-6' style={{ height: '320px', width: '565px', borderRadius: '19px', margin: 'auto' }}>
                    <div className="flex justify-between items-center">
                        <p className="text-lg text-white font-medium">Cross Chain Swaps</p>
                        <img src="./Settings.svg" alt="Image element" className="w-6 h-6" />
                    </div>
                    <div className="flex justify-between items-center pt-7">
                        <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                        <p className="text-lg text-slate-600 font-medium">Enter an Amount</p>
                    </div>
                    <div className="flex flex-row py-4 items-center">
                        <div className="h-px w-60 bg-neutral-400"></div>
                        <button className="relative h-10 w-9 py-2.5 px-3 bg-bg-grey-light rounded-full">
                            <img src="./Switchswaps.svg" alt="Button Image" className=" h-5 w-2.5" />
                        </button>
                        <div className="h-px w-60 bg-neutral-400"></div>
                    </div>
                    <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                    <button className='w-full h-12 mt-8  bg-bg-green text-black rounded-full'>Select Token</button>
                </div>
            </div>

        </div>
    )
}

export default Main
