import ProjectCard, {ProjectCardProps} from "@/components/project-card";

export interface ProjectGridProps {
    title: string;
    projects: ProjectCardProps[];
}

export default function ProjectGrid(props: ProjectGridProps) {
    return (
        <>
            <h2 className="text-2xl font-bold my-8 text-center">{props.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {props.projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                })}
            </div>
        </>
    )
}