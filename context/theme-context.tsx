import React from "react";

export const darkTheme = 'night';
export const lightTheme = 'corporate';

export const ThemeContext = React.createContext({
    theme: lightTheme,
    toggleTheme: (theme: string) => {
    }
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({children}: any) => {

    const [theme, setTheme] = React.useState(lightTheme);

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