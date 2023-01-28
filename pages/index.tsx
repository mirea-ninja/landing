import Layout from "@/components/Layout";
import ProjectGrid, {ProjectGridProps} from "@/components/ProjectGrid";
import React from "react";
import {CMSProjectGroupsUrl} from "@/constants/constants";


export async function getStaticProps() {
    // const response = await fetch(CMSProjectGroupsUrl).then(res => res.json());
    const response = {"data":[{"id":2,"attributes":{"title":"Титул группы 2","createdAt":"2023-01-28T07:39:36.865Z","updatedAt":"2023-01-28T07:39:41.753Z","publishedAt":"2023-01-28T07:39:41.746Z","order":2,"projectCards":[{"id":2,"title":"2","description":"2","icon":{"data":null},"badges":[],"authors":[],"links":[{"website":"Telegram","link":"https://t.me"},{"website":"VK","link":"https://t.me"}]}]}},{"id":1,"attributes":{"title":"Титул группы","createdAt":"2023-01-28T07:22:18.661Z","updatedAt":"2023-01-28T07:41:39.897Z","publishedAt":"2023-01-28T07:24:21.016Z","order":1,"projectCards":[{"id":1,"title":"Проект 1","description":"Описание","icon":{"data":null},"badges":[{"id":2,"text":"Бейдж 1","color":"secondary"}],"authors":[{"id":2,"name":"автор1","githubLink":"https://github.com/valeryverkhoturov"}],"links":[{"id":1,"website":"GooglePlay","link":"https://googleplay.com"},{"id":2,"website":"AppStore","link":"appStore.ru"}]},{"id":3,"title":"Gvev","description":"wwvwev wwvwev wwvwev wwvwev wwvwev wwvwev wwvwev wwvwev wwvwev wwvwev","icon":{"data":null},"badges":[],"authors":[],"links":[]}]}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":2}}}
    const projects = response.data.map((group: any) => group.attributes)

    projects.sort((a: { order: number; }, b: { order: number; }) => a.order - b.order)

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
