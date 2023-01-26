import Layout from "@/components/Layout";
import ProjectGrid, {ProjectGridProps} from "@/components/ProjectGrid";
import React from "react";


export async function getStaticProps() {
    const response = await fetch("https://cms.mirea.ninja/api/landing-project-groups?populate[projectCards][populate]=*").then(res => res.json());
    const projects = response.data.map((group: any) => group.attributes)

    return {
        props: {projects}
    }
}

interface ProjectLandingProps {
    projects: ProjectGridProps[]
}

export default function ProjectLanding(props: ProjectLandingProps) {
    return (
        <Layout>
            {props.projects.map((grid, index) => {
                return <ProjectGrid key={index} title={grid.title} projectCards={grid.projectCards}/>
            })}
        </Layout>
    )
}
