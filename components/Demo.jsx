import React, { useState } from 'react';

const Demo = () => {
    const [selectedToken2, setSelectedToken2] = useState("Select Token");
    const [showOptions2, setShowOptions2] = useState(false);

    const handleTokenSelection2 = (token) => {
        setSelectedToken2(token);
        setShowOptions2(false);
    };

    return (
        <div className="relative ml-80">
            <button
                className="w-32 h-9  mb-8 bg-bg-green text-black rounded-full"
                onClick={() => setShowOptions2(!showOptions2)}
            >
                {selectedToken2}
            </button>
            {showOptions2 && (
                <div className=" absolute top-8 mt-2 w-48 rounded-md shadow-lg">
                    <div className="bg-white rounded-md shadow-xs">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            <button
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                                onClick={() => handleTokenSelection2("Ethereum")}
                            >
                                Ethereum
                            </button>
                            <button
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                                onClick={() => handleTokenSelection2("USDT")}
                            >
                                USDT
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Demo;

