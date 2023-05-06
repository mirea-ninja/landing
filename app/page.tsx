import ProjectGrid, { ProjectGridProps } from '@/components/projects/ProjectGrid'
import React from 'react'
import { CMSProjectGroupsUrl } from '@/constants/constants'

export const dynamic = 'auto'
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'all'

const getProjects = async () => {
  const response = await fetch(CMSProjectGroupsUrl).then((res) => res.json())
  const projects = response.data.map((group: any) => group.attributes)

  projects.sort((a: { order: number }, b: { order: number }) => a.order - b.order)

  return projects as ProjectGridProps[]
}

export default async function ProjectLanding() {
  const projects = await getProjects()

  return (
    <div className='relative pt-16'>
      {projects.map((grid, index) => {
        return <ProjectGrid key={index} title={grid.title} projectCards={grid.projectCards} />
      })}
    </div>
  )
}
