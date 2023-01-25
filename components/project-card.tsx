import Link from "next/link";
import Image from "next/image";


const avatarClass = "w-16 h-16 rounded-xl ring-1 group-hover:ring-2 duration-200 ring-secondary"

function placeholderAvatar(title: string) {
    const letters = title.split(" ")
    const firstLetter = letters[0] ? letters[0][0] : null
    const secondLetter = letters[1] ? letters[1][0] : null

    return (
        <div className={`avatar placeholder ${avatarClass}`}>
            <div className={`text-access-content font-bold bg-accent group-hover:bg-accent-focus`}>
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
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.link}
              className="card card-bordered group rounded-xl ring-1 ring-primary hover:ring-2 hover:ring-primary-focus duration-200 cursor-pointer min-h-[240px]">
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
                        </div> : placeholderAvatar(props.title)}
                </div>
                <h3 className="text-sm font-bold mb-2">{props.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{props.description}</p>
            </div>
        </Link>
    )
}