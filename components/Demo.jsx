import React, { useState } from 'react';
import MenuLg from '../components/MenuLg';
import Menu from '../components/MenuLg'
import NavbarSettingSm from '../components/NavSettingSm'


function Navbar() {


    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        setVisible(!visible);
    };




    return (
        <div >
            {/*For mobile and tablet*/}
            <div className='lg:hidden'>
                <div className='navbar px-4 py-8 bg-bg-black flex justify-items-end max-width-full'>

                    <div className="relative dropdown dropdown-bottom dropdown-end">
                        <button className='w-12 h-12 ml-80' onClick={handleClick} >
                            <div className="relative btn btn-circle bg-transparent">
                                <div className='  h-3.5 w-5'>
                                    <div
                                        className={`bg-white h-0.5 w-5 origin-top-left rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                                    />
                                    <div
                                        className={`bg-white h-0.5 w-5 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                                    />
                                    <div
                                        className={`bg-white h-0.5 w-5  rounded-md mt-1 ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                                    />
                                </div>
                            </div>
                        </button>
                        <div tabIndex={0} className={`dropdown-content  menu  shadow bg-base-100 rounded-box  ${visible ? 'block' : 'hidden'}`}>
                            <MenuLg />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar