import Link from "next/link";
import TelegramLogo from "@/components/icons/TelegramLogo";
import VKLogo from "@/components/icons/VKLogo";
import SwaggerLogo from "@/components/icons/SwaggerLogo";
import GooglePlayLogo from "@/components/icons/GooglePlayLogo";
import AppStoreLogo from "@/components/icons/AppStoreLogo";
import GitHubLogo from "@/components/icons/GitHubLogo";
import { LinkIcon } from "@heroicons/react/20/solid";
import DiscordLogo from "@/components/icons/DiscordLogo";
import RTUMIREALogo from "@/components/icons/RTUMIREALogo";
import MireaNinjaForumLogo from "@/components/icons/MireaNinjaForumLogo";

enum Website {
  TELEGRAM = "Telegram",
  VK = "VK",
  DISCORD = "Discord",
  GOOGLE_PLAY = "GooglePlay",
  APPSTORE = "AppStore",
  GITHUB = "GitHub",
  SWAGGER = "Swagger",
  RTU_MIREA = "RTU MIREA",
  MIREA_NINJA_FORUM = "Mirea Ninja Forum",
  ANOTHER_SITE = "Another site",
}

export interface ProjectLinkBadgeProps {
  website: Website;
  link: string;
}

export default function ProjectCardLinkBadge(props: ProjectLinkBadgeProps) {
  if (Object.values(Website).includes(props.website)) {
    return (
      <Link
        href={props.link}
        target="_blank"
        className="pl-1 text-slate-500 dark:text-slate-400 hover:text-current transition duration-200"
      >
        <div className="w-7 h-7">
          {props.website === Website.TELEGRAM && <TelegramLogo />}
          {props.website === Website.VK && <VKLogo />}
          {props.website === Website.DISCORD && <DiscordLogo />}
          {props.website === Website.GOOGLE_PLAY && <GooglePlayLogo />}
          {props.website === Website.APPSTORE && <AppStoreLogo />}
          {props.website === Website.GITHUB && <GitHubLogo />}
          {props.website === Website.SWAGGER && <SwaggerLogo />}
          {props.website === Website.RTU_MIREA && <RTUMIREALogo />}
          {props.website === Website.MIREA_NINJA_FORUM && (
            <MireaNinjaForumLogo />
          )}
          {props.website === Website.ANOTHER_SITE && <LinkIcon />}
        </div>
      </Link>
    );
  }
  return null;
}
