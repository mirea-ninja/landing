import Link from "next/link";
import React from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useTheme} from "@/context/theme-context";
import {lightTheme, darkTheme} from "@/context/theme-context";
import GithubMark from "@/components/icons/github-mark";
import VKLogo from "@/components/icons/vk-logo";

const iconSize = "w-7 h-7";
export default function Navbar() {

    const {toggleTheme} = useTheme();

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <label className="btn btn-square btn-ghost swap swap-rotate">
                    <input type="checkbox"
                           onChange={(event) => toggleTheme(event.currentTarget.checked ? darkTheme : lightTheme)}/>
                    <SunIcon className={`swap-off fill-current ${iconSize}`}/>
                    <MoonIcon className={`swap-on fill-current ${iconSize}`}/>
                </label>
                <Link href="https://vk.com/mirea.ninja"
                      target="_blank"
                      className="btn btn-square btn-ghost">
                    <VKLogo className={iconSize}/>
                </Link>
                <Link href="https://github.com/mirea-ninja"
                      target="_blank"
                      className="btn btn-square btn-ghost">
                    <GithubMark className={iconSize}/>
                </Link>
            </div>
        </div>
    )
}