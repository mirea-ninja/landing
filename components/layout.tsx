import Head from "next/head";
import Navbar from "@/components/navbar";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {

    return (
        <>
            <Head>
                <title>Mirea Ninja</title>
                <meta name="description" content="Наши проекты и идеи"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
                <Navbar/>
                {props.children}
            </main>
        </>
    )
}