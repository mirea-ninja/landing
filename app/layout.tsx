import '@/app/globals.css'

import { ThemeProvider } from "@/context/ThemeContext";
import { appDescription, appName, shortAppName } from "@/constants/constants";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  openGraph: {
    title: shortAppName,
    siteName: appName,
    images: 'https://cdn.cms.mirea.ninja/navigator_logo_3527455f8d.png'
  }
}

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <html lang='ru'>
      <head>
        <title />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/static/favicon.ico' />
        <script src='https://cdn.tailwindcss.com' />
      </head>
      <body>
        <ThemeProvider>
          {props.children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
