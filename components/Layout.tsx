import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>MN: Navigator</title>
                <meta name="description" content="Наши проекты и идеи"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Navigator"/>
                <meta property="og:site_name" content="Mirea Ninja"/>
                <meta property="og:description" content="Проекты для студентов РТУ МИРЭА"/>
                <meta property="og:image" content="https://cdn.cms.mirea.ninja/navigator_logo_3527455f8d.png"/>
                <link rel="icon" href="/static/favicon.ico"/>
            </Head>
            <main className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {props.children}
                <Navbar/>
            </main>
        </>
    )
}