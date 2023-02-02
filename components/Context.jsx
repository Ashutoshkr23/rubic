import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();
export const ShowContentContext = createContext();
export const SwapActiveContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(true);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const ShowContentProvider = ({ children }) => {
    const [showContent, setShowContent] = useState(false);

    return (
        <ShowContentContext.Provider value={{ showContent, setShowContent }}>
            {children}
        </ShowContentContext.Provider>
    );
};

export const SwapActiveProvider = ({ children }) => {
    const [swapActive, setSwapActive] = useState(false);

    return (
        <SwapActiveContext.Provider value={{ swapActive, setSwapActive }}>
            {children}
        </SwapActiveContext.Provider>
    );
};


