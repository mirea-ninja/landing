import {lightTheme, darkTheme} from "@/context/theme-context";

export function getSystemTheme() {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
    }
    return lightTheme
}