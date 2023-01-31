import Link from "next/link";
import React from "react";
import ThemeCheckbox from "@/components/ThemeCheckbox";
import {appName, navbarIconSizeClassName, shortAppName} from "@/constants/constants";
import MNNavigator from "@/components/icons/MNNavigator";
import NavbarLinks from "@/components/NavbarLinks";

export default function Navbar() {

    return (
        <div className="navbar bg-base-200 shadow-md rounded-box">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost normal-case text-xl content-center">
                    <MNNavigator className="w-12 h-12 pr-1"/>
                    <div className="visible md:invisible md:w-0 md:h-0">{shortAppName}</div>
                    <div className="invisible w-0 h-0 md:visible md:w-fit md:h-fit">{appName}</div>
                </Link>
            </div>
            <div className="navbar-center"/>
            <div className="navbar-end">
                <ThemeCheckbox iconSize={navbarIconSizeClassName}/>
                <NavbarLinks/>
            </div>
        </div>
    )
}