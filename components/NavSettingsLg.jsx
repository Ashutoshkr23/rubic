import React, { useState, useContext } from 'react';
import { DarkModeContext } from "../components/Context";

function NavSettingsLg(props) {
    const {visible1, setVisible1} = props;
    const { isDarkMode, setDarkMode } = useContext(DarkModeContext);
    return (
        <div>
            <div className='lg:hidden' >
                <div className={` rounded-box w-64 px-5 py-4 ${isDarkMode ? "bg-bg-grey-div" : "bg-bg-white-setting"}`} >
                    <div className='flex flex-col'></div>
                    <div>
                        <div className="flex justify-between">
                            <p className={`${isDarkMode?"text-black":"text-white"}`}>Settings</p>
                            <button onClick={() => setVisible1(!visible1)}><img src={isDarkMode ? "./Close.svg " : " ./Close-light.png "} alt="image" className="w-4 h-4 rounded-full" /></button>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center gap-px'>
                            <div className={`px-4 py-4 bg-bg-grey-option rounded-xl mt-3 h-28 w-52 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./moon.svg " : " ./sun.svg "} alt="image" className="w-4 h-4 " />
                                    <label className="relative inline-flex items-center ">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isDarkMode}
                                            onChange={() => setDarkMode(!isDarkMode)}
                                        />
                                        <span className={`toggle-slider rounded-full w-12 h-6 shadow-inner ${isDarkMode ? 'bg-bg-red' : 'bg-white'
                                            }`}></span>
                                        <span
                                            className={`toggle-button absolute w-4 h-4 my-1 rounded-full bg-black shadow inset-y-0 transition-all duration-200 ease-in-out ${isDarkMode ? 'right-1 ' : 'left-1'
                                                }`}
                                        ></span>
                                    </label>
                                </div>
                                <h3 className={`font-bold pt-1.5 ${isDarkMode ? "text-white" : "text-black"}`}>Switch Theme</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>Theme for web</h5>
                            </div>

                            <div className={`px-4 py-4 bg-bg-grey-option rounded-xl mt-3 h-28 w-52 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./English.svg " : " ./English-light.svg "} alt="image" className="w-8 h-8 " />
                                    <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                                </div>
                                <h3 className={`font-bold pt-1.5 ${isDarkMode ? "text-white" : "text-black"}`}>Language</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>Choose language</h5>
                            </div>

                            <div className={`px-4 py-4 bg-bg-grey-option rounded-xl mt-3 h-28 w-52 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./gas.svg " : " ./gas-light.svg "} alt="image" className="w-8 h-8 " />
                                    <h5 className='text-neutral-300 pt-1 text-base'>14.70</h5>
                                </div>
                                <h3 className={`font-bold pt-1.5 ${isDarkMode ? "text-white" : "text-black"}`}>Gas Price</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>In Etherium chain</h5>
                            </div>
                            <div className={`px-4 py-4 bg-bg-grey-option rounded-xl mt-3 h-28 w-52 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./education.svg " : " ./tutorial-light.svg "} alt="image" className="w-8 h-8 " />
                                    <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                                </div>
                                <h3 className={`font-bold pt-1.5 ${isDarkMode ? "text-white" : "text-black"}`}>Tutorials</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>How to use</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='hidden lg:block'>
                <div className={` rounded-box h-50 px-5 py-4 ${isDarkMode ? "bg-bg-grey-div" : "bg-bg-white-setting"}`} >
                    <div>
                        <div className="flex justify-between">
                            <p className={`${isDarkMode ? "text-white" : "text-black"}`}>Settings</p>
                            <button onClick={() => setVisible1(!visible1)}><img src={isDarkMode ? "./Close.svg " : " ./Close-light.png "} alt="image" className="w-4 h-4 rounded-full" /></button>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-2.5'>
                            <div className={`px-4 py-5 bg-bg-grey-option rounded-xl mt-3 h-32  w-40 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./moon.svg " : " ./sun.svg "} alt="image" className="w-4 h-4 " />
                                    <label className="relative inline-flex items-center ">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isDarkMode}
                                            onChange={() => setDarkMode(!isDarkMode)}
                                        />
                                        <span className={`toggle-slider rounded-full w-12 h-6 shadow-inner ${isDarkMode ? 'bg-bg-red' : 'bg-white'
                                            }`}></span>
                                        <span
                                            className={`toggle-button absolute w-4 h-4 my-1 rounded-full bg-black shadow inset-y-0 transition-all duration-200 ease-in-out ${isDarkMode ? 'right-1 ' : 'left-1'
                                                }`}
                                        ></span>
                                    </label>
                                </div>
                                <h3 className={`font-bold pt-5 ${isDarkMode ? "text-white" : "text-black"}`}>Switch Theme</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>Theme for web</h5>
                            </div>
                            <div className={`px-4 py-5 bg-bg-grey-option rounded-xl mt-3 h-32  w-40 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./English.svg " : " ./English-light.svg "} alt="image" className="w-8 h-8 " />
                                    <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                                </div>
                                <h3 className={`font-bold pt-3 ${isDarkMode ? "text-white" : "text-black"}`}>Language</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>Choose Language</h5>
                            </div>
                            <div className={`px-4 py-5 bg-bg-grey-option rounded-xl mt-3 h-32  w-40 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./gas.svg " : " ./gas-light.svg "} alt="image" className="w-8 h-8 " />
                                    <h5 className='text-neutral-300 pt-1 text-base'>14.70</h5>
                                </div>
                                <h3 className={`font-bold pt-3 ${isDarkMode ? "text-white" : "text-black"}`}>Gas Price</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>In Etherium chain</h5>
                            </div>
                            <div className={`px-4 py-5 bg-bg-grey-option rounded-xl mt-3 h-32  w-40 ${isDarkMode ? "bg-bg-grey-option" : "bg-bg-white-set-options"}`} >
                                <div className="flex justify-between">
                                    <img src={isDarkMode ? "./education.svg " : " ./tutorial-light.svg "} alt="image" className="w-8 h-8 " />
                                    <img src="./goto.svg" alt="image" className="w-1.5 h-2.5 " />
                                </div>
                                <h3 className={`font-bold pt-3 ${isDarkMode ? "text-white" : "text-black"}`}>Tutorials</h3>
                                <h5 className='text-neutral-300 pt-1 text-sm'>How to use</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavSettingsLg
