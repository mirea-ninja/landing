import React from "react";
import {getSystemTheme} from "@/utils/get-system-theme";
import {lightTheme} from "@/constants/constants";

export const ThemeContext = React.createContext({
    theme: lightTheme,
    toggleTheme: (theme: string) => {
    }
});

export const useTheme = () => React.useContext(ThemeContext);

export function ThemeProvider({children}: any) {

    const [theme, setTheme] = React.useState(getSystemTheme());

    const toggleTheme = (theme: string) => {
        setTheme(theme);
        document.querySelector('html')!.setAttribute('data-theme', theme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};