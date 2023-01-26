import Layout from "@/components/layout";
import ProjectGrid, {ProjectGridProps} from "@/components/project-grid";
import React from "react";
import {getBaseUrl} from "@/utils/get-base-url";

export async function getStaticProps() {
    const projects: ProjectGridProps[] = await fetch(`${getBaseUrl()}/api/projects`).then(res => res.json());
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
                return <ProjectGrid key={index} title={grid.title} projects={grid.projects}/>
            })}
        </Layout>
    )
}
