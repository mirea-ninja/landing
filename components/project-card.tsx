import Link from "next/link";
import Image from "next/image";


const avatarClassSize = "w-16 h-16"
const avatarClass = `${avatarClassSize} rounded-xl ring-1 group-hover:ring-2 duration-200 ring-secondary`


function PlaceholderAvatar(props: { title: string }) {
    const letters = props.title.split(" ")
    const firstLetter = letters[0] ? letters[0][0] : null
    const secondLetter = letters[1] ? letters[1][0] : null

    return (
        <div className={`avatar placeholder ${avatarClass}`}>
            <div className={`${avatarClassSize} bg-local bg-accent group-hover:bg-accent-focus duration-200`}>
                <span className="text-xl font-bold text-access-content">{firstLetter}{secondLetter}</span>
            </div>
        </div>
    )
}

function Avatar(props: { title: string, icon: string }) {
    return (
        <div className={avatarClass}>
            <Image
                src={props.icon}
                width={64}
                height={64}
                alt={`Логотип проекта ${props.title}`}
                className="bg-white"
            />
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
                        <Avatar title={props.title} icon={props.icon}/> : <PlaceholderAvatar title={props.title}/>}
                </div>
                <h3 className="text-sm font-bold mb-2">{props.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{props.description}</p>
            </div>
        </Link>
    )
}