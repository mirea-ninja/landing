import ProjectCard, {ProjectCardProps} from "@/components/ProjectCard";
import CyrillicToTranslit from "cyrillic-to-translit-js";

export interface ProjectGridProps {
    title: string;
    projectCards: ProjectCardProps[];
}

const cyrillicToTranslit = new CyrillicToTranslit();

export default function ProjectGrid(props: ProjectGridProps) {
    const tag = cyrillicToTranslit.transform(props.title, '-').toLowerCase();
    return (
        <>
            <a href={`#${tag}`} id={tag}>
                <h2 className="text-2xl font-bold my-8 text-start md:text-center">{props.title}</h2>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {props.projectCards.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                })}
            </div>
        </>
    )
}