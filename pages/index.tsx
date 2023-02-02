import Layout from "@/components/Layout";
import ProjectGrid, { ProjectGridProps } from "@/components/ProjectGrid";
import React from "react";
import { CMSProjectGroupsUrl } from "@/constants/constants";

export async function getStaticProps() {
  const response = await fetch(CMSProjectGroupsUrl).then((res) => res.json());
  const projects = response.data.map((group: any) => group.attributes);

  projects.sort(
    (a: { order: number }, b: { order: number }) => a.order - b.order
  );

  return {
    props: { projects },
  };
}

interface ProjectLandingProps {
  projects: ProjectGridProps[];
}

export default function ProjectLanding(props: ProjectLandingProps) {
  return (
    <Layout>
      {props.projects.map((grid, index) => {
        return (
          <ProjectGrid
            key={index}
            title={grid.title}
            projectCards={grid.projectCards}
          />
        );
      })}
    </Layout>
  );
}
