import Link from "next/link";
import Image from "next/image";


const avatarClass = "w-16 h-16 rounded-xl ring-offset-1 ring-1 ring-secondary"

function placeholderAvatar(title: string, backgroundColor?: string) {
    const letters = title.split(" ")
    const firstLetter = letters[0] ? letters[0][0] : null
    const secondLetter = letters[1] ? letters[1][0] : null

    return (
        <div className="avatar placeholder">
            <div className={`text-info-content font-bold ring-inset ${avatarClass} ${backgroundColor}`}>
                <span className="text-xl">{firstLetter}{secondLetter}</span>
            </div>
        </div>
    )
}

export interface ProjectCardProps {
    title: string
    description: string
    link: string
    icon?: string
    backgroundColor?: string // static prop for avatar placeholder
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.link}
              className="card card-bordered rounded-xl ring-1 ring-primary hover:ring-2 hover:ring-primary-focus duration-200 cursor-pointer min-h-[240px]">
            <div className="card-body primary-content">
                <div className="avatar mb-4">
                    {props.icon !== undefined ?
                        <div className={avatarClass}>
                            <Image
                                src={props.icon}
                                width={64}
                                height={64}
                                alt={`Логотип проекта ${props.title}`}
                                className="bg-white"
                            />
                        </div> : placeholderAvatar(props.title, props.backgroundColor)}
                </div>
                <h3 className="text-sm font-bold mb-2">{props.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{props.description}</p>
            </div>
        </Link>
    )
}