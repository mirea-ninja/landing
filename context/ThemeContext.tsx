"use client"

import React, { useEffect } from 'react'
import { darkTheme, lightTheme } from '@/constants/constants'
import { getSystemTheme } from '@/lib/getSystemTheme'

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: (theme: string) => {},
})

export const useTheme = () => React.useContext(ThemeContext)

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = React.useState(getSystemTheme())

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      toggleTheme(event.matches ? darkTheme : lightTheme)
    })
  }, [])

  const toggleTheme = (theme: string) => {
    setTheme(theme)
    document.querySelector('html')!.setAttribute('data-theme', theme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
