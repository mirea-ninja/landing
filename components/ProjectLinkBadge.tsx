import Link from "next/link";
import TelegramLogo from "@/components/icons/TelegramLogo";
import VKLogo from "@/components/icons/VKLogo";
import SwaggerLogo from "@/components/icons/SwaggerLogo";
import GooglePlayLogo from "@/components/icons/GooglePlayLogo";
import AppStoreLogo from "@/components/icons/AppStoreLogo";
import GitHubLogo from "@/components/icons/GitHubLogo";
import {LinkIcon} from "@heroicons/react/20/solid";
import DiscordLogo from "@/components/icons/DiscordLogo";
import RTUMIREALogo from "@/components/icons/RTUMIREALogo";
import MireaNinjaForumLogo from "@/components/icons/MireaNinjaForumLogo";

export interface ProjectLinkBadgeProps {
    website: "Telegram" | "VK" | "Discord" | "GooglePlay" | "AppStore" |
        "GitHub" | "Swagger" | "RTU MIREA" | "Mirea Ninja Forum" | "Another site"
    link: string
}

const websites = ["Telegram", "VK", "Discord", "GooglePlay", "AppStore",
    "GitHub", "Swagger", "RTU MIREA", "Mirea Ninja Forum", "Another site"]

export default function ProjectLinkBadge(props: ProjectLinkBadgeProps) {
    if (websites.includes(props.website)) {
        return (
            <Link href={props.link} target="_blank" className="pl-1 text-slate-500 dark:text-slate-400 hover:text-current">
                <div className="w-7 h-7">
                    {props.website === "Telegram" && <TelegramLogo/>}
                    {props.website === "VK" && <VKLogo/>}
                    {props.website === "Discord" && <DiscordLogo/>}
                    {props.website === "GooglePlay" && <GooglePlayLogo/>}
                    {props.website === "AppStore" && <AppStoreLogo/>}
                    {props.website === "GitHub" && <GitHubLogo/>}
                    {props.website === "Swagger" && <SwaggerLogo/>}
                    {props.website === "RTU MIREA" && <RTUMIREALogo/>}
                    {props.website === "Mirea Ninja Forum" && <MireaNinjaForumLogo/>}
                    {props.website === "Another site" && <LinkIcon/>}
                </div>
            </Link>
        )
    }
    return null;
}