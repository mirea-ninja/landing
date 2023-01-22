import Link from "next/link";
import Image from "next/image";

export interface ProjectCardProps {
    title: string
    description: string
    link: string
    icon: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.link}>
            <div
                className="rounded-2xl p-4 ring-1 ring-gray-200 ring-inset hover:ring-2 hover:ring-blue-100 transition-all duration-200 cursor-pointer min-h-[240px]">
                <Image
                    src={props.icon}
                    width={64}
                    height={64}
                    alt={`Логотип проекта ${props.title}`}
                    className="rounded-xl ring-1 ring-gray-200 ring-inset mb-4"
                />
                <h3 className="text-sm font-bold mb-2">{props.title}</h3>
                <p className="text-sm text-gray-500">{props.description}</p>
            </div>
        </Link>
    )
}