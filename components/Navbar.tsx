import Link from "next/link";
import React from "react";
import GithubMark from "@/components/icons/GithubMark";
import VKLogo from "@/components/icons/VKLogo";
import ThemeCheckbox from "@/components/ThemeCheckbox";
import {GitHubLink, VKLink} from "@/constants/constants";

const iconSize = "w-7 h-7";
export default function Navbar() {

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <ThemeCheckbox iconSize={iconSize}/>
                <Link href={VKLink}
                      target="_blank"
                      className="btn btn-square btn-ghost">
                    <VKLogo className={iconSize}/>
                </Link>
                <Link href={GitHubLink}
                      target="_blank"
                      className="btn btn-square btn-ghost">
                    <GithubMark className={iconSize}/>
                </Link>
            </div>
        </div>
    )
}