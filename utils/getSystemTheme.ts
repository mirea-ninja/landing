import {lightTheme, darkTheme} from "@/constants/constants";

export function getSystemTheme() {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
    }
    return lightTheme
}