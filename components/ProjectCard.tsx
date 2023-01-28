import Avatar from "@/components/Avatar";
import ProjectLinkBadge, {ProjectLinkBadgeProps} from "@/components/ProjectLinkBadge";

enum BadgeColors {
    primary = "badge-primary",
    secondary = "badge-secondary",
    accent = "badge-accent",
    neutral = ""
}

interface Badge {
    text: string
    color: "primary" | "secondary" | "accent" | "neutral"
}

interface Author {
    name: string
    githubLink: string
    image: { data: { attributes: { url: string } } | null } | null
}

export interface ProjectCardProps {
    title: string
    description: string
    icon: { data: { attributes: { url: string } } | null } | null
    authors: Author[]
    badges: Badge[]
    links: ProjectLinkBadgeProps[]
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className="card group ring-1 ring-primary hover:ring-2 hover:ring-primary-focus duration-200 min-h-[240px]">
            <div className="card-body primary-content">
                <div className="flex mb-4">
                    <div className="avatar">
                        {props.icon !== undefined && props.icon !== null && props.icon.data !== null ?
                            <Avatar title={props.title} icon={props.icon.data.attributes.url}/> :
                            <Avatar title={props.title}/>}
                    </div>
                    <div className="flex flex-col ml-4 items-center">
                        {props.badges?.map((badge, index) => (
                            <div key={index}
                                 className={`badge ${BadgeColors[badge.color]} self-start ml-1 mb-1 whitespace-nowrap`}>{badge.text}</div>
                        ))}
                    </div>
                </div>
                <h3 className="text-sm font-bold mb-2">{props.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{props.description}</p>
                {props.links.length !== 0 &&
                    <div className="flex">
                        {props.links.map((link, index) =>
                            <ProjectLinkBadge key={index} website={link.website} link={link.link}/>)}
                    </div>}
            </div>
        </div>
    )
}