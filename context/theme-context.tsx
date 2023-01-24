import React from "react";

const defaultTheme = 'light';

export const ThemeContext = React.createContext({
    theme: defaultTheme,
    toggleTheme: (theme: string) => {
    }
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = React.useState(defaultTheme);

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