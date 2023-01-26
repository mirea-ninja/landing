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
                <span className="text-xl font-bold text-access-content">
                    {firstLetter?.toUpperCase()}
                    {secondLetter?.toUpperCase()}
                </span>
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

function StoreBadge(props: { link: string, market: "app-store" | "google-play" }) {
    let src = ""
    let alt = ""
    if (props.market === "app-store") {
        src = "static/market-badges/app-store-badge-ru.svg"
        alt = "Скачать в App Store"
    } else if (props.market === "google-play") {
        src = "static/market-badges/google-play-badge-ru.svg"
        alt = "Скачать Google Play"
    }

    return (
        <Link href={props.link} target="_blank">
            <Image src={src} alt={alt} width={120} height={40}/>
        </Link>
    )
}

interface ProjectCardBodyProps {
    title: string
    description: string
    icon: {data:{attributes:{url:string}}} | null
    googlePlayLink: string | null
    appStoreLink: string | null
    badges?: { text: string, className: string }[]
}

export interface ProjectCardProps extends ProjectCardBodyProps {
    link: string
}

function ProjectCardBody(props: ProjectCardBodyProps) {
    return (
        <div className="card-body primary-content">
            <div className="flex mb-4">
                <div className="avatar">
                    {props.icon !== undefined && props.icon !== null && props.icon.data !== null ?
                        <Avatar title={props.title} icon={props.icon.data.attributes.url}/> : <PlaceholderAvatar title={props.title}/>}
                </div>
                <div className="flex flex-col ml-4 items-center">
                    {props.badges?.map((badge, index) => (
                        <div key={index}
                             className={`badge ${badge.className ? badge.className : "badge-primary"} self-center ml-1 mb-1 whitespace-nowrap`}>{badge.text}</div>
                    ))}
                </div>
            </div>
            <h3 className="text-sm font-bold mb-2">{props.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{props.description}</p>
            {(props.googlePlayLink !== null && props.googlePlayLink !== undefined ||
                props.appStoreLink !== null && props.appStoreLink !== undefined) && (
                <div className="grid grid-cols-2 gap-1 mt-4 place-items-center">
                    {props.googlePlayLink !== null && props.googlePlayLink !== undefined &&
                        <StoreBadge market="google-play" link={props.googlePlayLink}/>}
                    {props.appStoreLink !== null && props.appStoreLink !== undefined &&
                        <StoreBadge market="app-store" link={props.appStoreLink}/>}
                </div>
            )}
        </div>
    )
}

export default function ProjectCard(props: ProjectCardProps) {
    const projectCardClassName = "card group ring-1 ring-primary hover:ring-2 hover:ring-primary-focus duration-200 min-h-[240px]"
    if (props.link !== null && props.link !== undefined) {
        return (
            <Link href={props.link!} target="_blank" className={projectCardClassName}>
                <ProjectCardBody {...props}/>
            </Link>
        )
    } else {
        return (
            <div
                className={projectCardClassName}>
                <ProjectCardBody {...props}/>
            </div>
        )
    }
}