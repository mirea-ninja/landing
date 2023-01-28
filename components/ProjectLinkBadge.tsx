import Link from "next/link";
import TelegramLogo from "@/components/icons/TelegramLogo";
import VKLogo from "@/components/icons/VKLogo";
import SwaggerLogo from "@/components/icons/SwaggerLogo";
import GooglePlayLogo from "@/components/icons/GooglePlayLogo";
import AppStoreLogo from "@/components/icons/AppStoreLogo";
import GithubMark from "@/components/icons/GithubMark";

export interface ProjectLinkBadgeProps {
    website: "Telegram" | "VK" | "Discord" | "GooglePlay" | "AppStore" |
        "GitHub" | "Swagger" | "RTU MIREA" | "Mirea Ninja Forum" | "Another site"
    link: string
}

// const websites = ["Telegram", "VK", "Discord", "GooglePlay", "AppStore",
//     "GitHub", "Swagger", "RTU MIREA", "Mirea Ninja Forum", "Another site"]
const websites = ["GooglePlay", "AppStore", "Telegram", "VK", "Swagger", "GitHub"]

export default function ProjectLinkBadge(props: ProjectLinkBadgeProps) {
    if (websites.includes(props.website)) {
        return (
            <Link href={props.link} target="_blank" className="btn btn-square btn-ghost">
                <div className="w-7 h-7">
                    {props.website === "GooglePlay" && <GooglePlayLogo/>}
                    {props.website === "AppStore" && <AppStoreLogo/>}
                    {props.website === "Telegram" && <TelegramLogo/>}
                    {props.website === "VK" && <VKLogo/>}
                    {props.website === "Swagger" && <SwaggerLogo/>}
                    {props.website === "GitHub" && <GithubMark/>}
                </div>
            </Link>
        )
    }
    return null;
}