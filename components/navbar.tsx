import Link from "next/link";
import Image from "next/image";
import React from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useTheme} from "@/context/theme-context";

export default function Navbar() {

    const {toggleTheme} = useTheme();

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost hower:btn-gost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <label className="btn btn-square btn-ghost hower:btn-gost swap swap-rotate">
                    <input type="checkbox"
                           onChange={(event) => toggleTheme(event.currentTarget.checked ? 'dark' : 'light')}/>
                    <SunIcon className="swap-off fill-current w-6 h-6"/>
                    <MoonIcon className="swap-on fill-current w-6 h-6"/>
                </label>
                <Link href="https://github.com/mirea-ninja"
                      className="btn btn-square btn-ghost hower:btn-gost">
                    <Image className="dark:fill-base-300" src="/github-mark.png" width={24} height={24}
                           alt="GitHub Logo"/>
                </Link>
            </div>
        </div>
    )
}