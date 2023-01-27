import Link from "next/link";
import React from "react";
import GithubMark from "@/components/icons/GithubMark";
import VKLogo from "@/components/icons/VKLogo";
import ThemeCheckbox from "@/components/ThemeCheckbox";
import {GitHubLink, TelegramLink, VKLink} from "@/constants/constants";
import TelegramLogo from "@/components/icons/TelegramLogo";

const iconSize = "w-7 h-7";

const links: {link: string, icon: JSX.Element}[] = [
    {link: VKLink, icon: <VKLogo className={iconSize}/>},
    {link: TelegramLink, icon: <TelegramLogo className={iconSize}/>},
    {link: GitHubLink, icon: <GithubMark className={iconSize}/>},
]

export default function Navbar() {

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <ThemeCheckbox iconSize={iconSize}/>
                {links.map(({link, icon}, index) => {
                    return (
                        <Link href={link} key={index}
                              target="_blank"
                              className="btn btn-square btn-ghost">
                            {icon}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}