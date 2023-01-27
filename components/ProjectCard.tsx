import Link from "next/link";
import ProjectCardBody, {ProjectCardBodyProps} from "@/components/ProjectCardBody";


export interface ProjectCardProps extends ProjectCardBodyProps {
    link: string
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