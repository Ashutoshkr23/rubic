import React, { useState, useEffect } from 'react';
import Menu1 from '../components/Menu1'
import Menu2 from '../components/Menu2'


function Main() {

    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
   
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

        <div className='bg-bg-black w-full h-full pb-20 '>
            {/*For mobile and tablet*/}
            <div className='sm:hidden' >
                <div className='bg-bg-grey border border-slate-600 p-6' style={{  width: 'auto', borderRadius: '19px', margin: '20px' }}>
                    <div className="flex justify-between items-center">
                        <p className="text-lg text-white font-medium">Cross Chain Swaps</p>

                        <div className="relative dropdown dropdown-bottom dropdown-end">
                            <button className='w-6 h-6' onClick={handleClick} >
                                <div className="relative  bg-transparent">
                                    <div >
                                        <img src="./Settings.svg" alt="Image element" className="w-6 h-6" />
                                    </div>
                                </div>
                            </button>
                            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
                                <Menu2/>
                            </div>
                        </div>



                        
                    </div>
                    <div className="flex flex-col justify-between items-start gap-6 pt-7">
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
                        <button className="relative h-10 w-9 py-2.5 px-3 bg-bg-grey-light rounded-full">
                            <img src="./Switchswaps.svg" alt="Button Image" className=" h-5 w-2.5" />
                        </button>
                        
                 <div className="h-px w-60 bg-neutral-400"></div>
                    </div>
                    <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                    <button className='w-full h-12 mt-16  bg-bg-green text-black rounded-full'>Connect Wallet</button>
                </div>
            </div>
            {/*For laptop*/}
            <div className='hidden sm:block'>
                <div className='bg-bg-grey-settings border border-slate-600 p-6' style={{  width: '565px', borderRadius: '19px', margin: 'auto' }}>
                    <div className="flex justify-between items-center">
                        <p className="text-lg text-white font-medium">Cross Chain Swaps</p>
                        


                        <div className="relative dropdown dropdown-bottom dropdown-end">
                            <button className='w-6 h-6' onClick={handleClick} >
                                <div className="relative  bg-transparent">
                                    <div >
                                        <img src="./Settings.svg" alt="Image element" className="w-6 h-6" />
                                    </div>
                                </div>
                            </button>
                            <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
                              <Menu1/>
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
                        <button className="relative h-10 w-9 py-2.5 px-3 bg-bg-grey-light rounded-full">
                            <img src="./Switchswaps.svg" alt="Button Image" className=" h-5 w-2.5" />
                        </button>
                        <div className="h-px w-60 bg-neutral-400"></div>
                    </div>
                    <button className='w-32 h-9  bg-bg-green text-black rounded-full'>Select Token</button>
                    <button className='w-full h-12 mt-16  bg-bg-green text-black rounded-full'>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default Main
