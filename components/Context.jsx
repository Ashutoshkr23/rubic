import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(true);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

