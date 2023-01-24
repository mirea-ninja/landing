import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {ThemeProvider} from "@/context/theme-context";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
