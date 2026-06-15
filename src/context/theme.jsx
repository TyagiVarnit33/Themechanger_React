import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isdark, setisdark] = useState(false);

    const darktheme = () => {
        setisdark(true);
    };

    const lighttheme = () => {
        setisdark(false);
    };

    return (
        <ThemeContext.Provider value={{ isdark, darktheme, lighttheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(ThemeContext);
}