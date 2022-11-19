import React, { createContext, useState, useMemo } from "react";
import Themes from "../style/AppThemeColors";
export const ColorThemeContext = createContext();
function ColorThemeProvider({ children }) {
    const [Colors, setColors] = useState(Themes.lightTheme); //setting light theme as default

    const ToggleTheme = () => {
        if (Colors.COLOR_THEME == 'light') setColors(Themes.darkTheme)
        else setColors(Themes.lightTheme)
    }

    const value = useMemo( 
        () => ({
            Colors,
            ToggleTheme,
        }),
        [Colors, setColors]
    );
    return (
        <ColorThemeContext.Provider value={value}>
            {children}
        </ColorThemeContext.Provider>
    );
}
export default ColorThemeProvider;