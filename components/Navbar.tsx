import Link from "next/link";
import React from "react";
import {useTheme} from "@/context/ThemeContext";
import GithubMark from "@/components/icons/GithubMark";
import VKLogo from "@/components/icons/VKLogo";
import ThemeCheckbox from "@/components/ThemeCheckbox";

const iconSize = "w-7 h-7";
export default function Navbar() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <ThemeCheckbox iconSize={iconSize}/>
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