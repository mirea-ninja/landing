import Avatar from "@/components/Avatar";
import StoreBadge from "@/components/StoreBadge";

export interface ProjectCardBodyProps {
    title: string
    description: string
    icon: { data: { attributes: { url: string } } | null } | null
    googlePlayLink: string | null
    appStoreLink: string | null
    badges?: { text: string, className: string }[]
}

export default function ProjectCardBody(props: ProjectCardBodyProps) {
    return (
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