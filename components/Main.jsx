import React, { useState, useEffect, useContext } from 'react';
import Menu1 from '../components/Menu1'
import Menu2 from '../components/Menu2'
import { DarkModeContext, SwapActiveContext , ShowContentContext } from "../components/Context";


function Main() {

    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useContext(DarkModeContext);
    const { swapActive } = useContext(SwapActiveContext);
    const { showContent } = useContext(ShowContentContext);
    
   
    const [value, setValue] = useState('Enter the amount');

    const handleChange = (e) => {
        setValue(e.target.value);
        if (value === 'Enter the amount') setValue('');
    };

    const inputRef = React.useRef(null);

    useEffect(() => {
        if (value === 'Enter the amount') {
            inputRef.current.setSelectionRange(0, 0);
        } else {
            inputRef.current.setSelectionRange(value.length, value.length);
        }
    }, [value]);

    const handleClick = () => {
        setIsOpen(!isOpen);
        setVisible(!visible);
    };
    return (

        <div className={`w-full flex-1  pb-20 ${isDarkMode ? 'bg-bg-black' : 'bg-bg-white-dim'}`}>
            
            {/*For mobile and tablet*/}
            <div className='sm:hidden' >
                <div className={`border border-slate-600 p-6 w-auto rounded-3xl m-5 ${isDarkMode ? 'bg-bg-grey' : 'bg-white'}`} >
                    
                    <div className="flex justify-between items-center">
                        <p className={`text-${isDarkMode ? "white" : "black"} text-lg font-medium`}>Cross Chain Swaps</p>

                        <div className="relative dropdown dropdown-bottom dropdown-end">
                            <button className='w-6 h-6' onClick={handleClick} >
                                <div className="relative  bg-transparent">
                                    <div >
                                        <img src="./Settings.svg" alt="Image element" className="w-6 h-6" />
                                    </div>
                                </div>
                            </button>
                            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
                                {swapActive ? <Menu2 /> : <Menu1 />}
                            </div>
                        </div>



                        
                    </div>
                    <div className="flex flex-col justify-between items-start gap-6 pt-7">
                        <button className='w-32 h-9  bg-bg-green text-black rounded-full'>                        <p className={`text-${isDarkMode ? "white" : "black"} text-lg font-medium`}>Cross Chain</p></button>
                        
                        <div className="flex flex-col items-center">
                            <input
                                type="text"
                                value={value}
                                onChange={handleChange}
                                ref={inputRef}
                                className="bg-transparent text-left p-2 border-none outline-none text-lg"
                            />
                            
                        </div>

                    </div>
                    <div className="flex flex-row py-4 items-center">
                        <div className="h-px w-60 bg-neutral-400"></div>
                        <button className={`relative h-10 w-9 py-2.5 px-3 rounded-full ${isDarkMode ? 'bg-bg-grey-settings' : 'bg-bg-white-dim'}`} >
                        <img src="./Switchswaps.svg" alt="Button Image" className=" h-5 w-2.5" />
                        </button>
                        
                 <div className="h-px w-60 bg-neutral-400"></div>
                    </div>
                    <button className='w-32 h-9  mb-8 bg-bg-green text-black rounded-full'>                        <p className={`text-${isDarkMode ? "white" : "black"} text-lg  font-medium`}>Select Token</p></button>
                    {showContent && (
                        <div>
                            <div className='flex h-11 mt-6 '>
                                <p className={`text-${isDarkMode ? "white" : "black"} text-sm `}>Wallet address in target network</p>
                                <img className="h-4 w-4 ml-1.5 " src="./info.svg" />
                            </div>
                            <div className="flex items-center border border-slate-500 relative rounded-full bg-grey-lighter h-11">
                                <input type="text" className="w-full bg-transparent rounded-full p-2" placeholder="Enter or paste address" />
                                <img src="./paste.svg" alt="icon" className="w-6 h-6 absolute right-4 mr-2" />
                            </div>
                        </div>
                    )}
                    <button className='w-full h-12 mt-4  bg-bg-green text-black rounded-full'>                        <p className={`text-${isDarkMode ? "white" : "black"} text-lg font-medium`}>Connect</p></button>
                </div>
            </div>
            {/*For laptop*/}
            <div className='hidden sm:block'>
                <div className={`border  min-w-min p-6 w-min rounded-3xl mx-auto ${isDarkMode ? 'bg-bg-grey border-slate-600' : 'bg-white border-border-light'}`} >

                
                    <div className="flex justify-between items-center">
                        <p className={`text-${isDarkMode ? "white" : "black"} text-lg font-medium`}>Cross Chain Swaps</p>
                        


                        <div className="relative dropdown dropdown-bottom dropdown-end">
                            <button className='w-6 h-6' onClick={handleClick} >
                                <div className="relative  bg-transparent">
                                    <div >
                                        <img src="./Settings.svg" alt="Image element" className="w-6 h-6" />
                                    </div>
                                </div>
                            </button>
                            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
                                {swapActive ? <Menu2 /> : <Menu1 />}
                            </div>
                        </div>


                    </div>
                    <div className="flex justify-between items-center pt-7">
                        <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                        <div className="flex flex-col items-center">
                            <input
                                type="text"
                                value={value}
                                onChange={handleChange}
                                ref={inputRef}
                                className="bg-transparent text-right p-2 border-none outline-none text-lg"
                            />

                        </div>
                    </div>
                    <div className="flex flex-row py-4 items-center">
                        <div className="h-px w-60 bg-neutral-400"></div>
                        <button className={`relative h-10 w-9 py-2.5 px-3 rounded-full ${isDarkMode ? 'bg-bg-grey-settings' : 'bg-bg-white-dim'}`}>
                            <img src="./Switchswaps.svg" alt="Button Image" className=" h-5 w-2.5" />
                        </button>
                        <div className="h-px w-60 bg-neutral-400"></div>
                    </div>
                    <button className='w-32 h-9 mb-8  bg-bg-green text-black rounded-full'>Select Token</button>
                    {showContent && (
                        <div>
                            <div className='flex h-12 py-3 mt-6 '>
                                <p className={`text-${isDarkMode ? "white" : "black"} text-sm `}>Wallet address in target network</p>
                                <img className="h-4 w-4 ml-1.5 " src="./info.svg" />
                            </div>
                            <div className="flex items-center border border-slate-500 relative rounded-full bg-grey-lighter h-11">
                                <input type="text" className="w-full bg-transparent rounded-full p-2" placeholder="Enter or paste address" />
                                <img src="./paste.svg" alt="icon" className="w-6 h-6 absolute right-4 mr-2" />
                            </div>
                        </div>
                    )}
                    <button className='w-full h-12 mt-4  bg-bg-green text-black rounded-full'>Connect Wallet</button>
                   
                </div>
            </div>
        </div>
    )
}

export default Main
