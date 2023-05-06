import ProjectCard, { ProjectCardProps } from '@/components/projects/ProjectCard'
import CyrillicToTranslit from 'cyrillic-to-translit-js'

export interface ProjectGridProps {
  title: string
  projectCards: ProjectCardProps[]
}

const cyrillicToTranslit = new CyrillicToTranslit()

export default function ProjectGrid(props: ProjectGridProps) {
  const tag = cyrillicToTranslit.transform(props.title, '-').toLowerCase()
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <div id={tag} className='-mt-16' />
      <a href={`#${tag}`}>
        <h2 className='pt-16 text-2xl font-bold text-start md:text-center'>{props.title}</h2>
      </a>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
        {props.projectCards.map((project, index) => {
          return <ProjectCard key={index} {...project} />
        })}
      </div>
    </div>
  )
}
