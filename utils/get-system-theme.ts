import {lightTheme, darkTheme} from "@/context/ThemeContext";

export function getSystemTheme() {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
    }
    return lightTheme
}