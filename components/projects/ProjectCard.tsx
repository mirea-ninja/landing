import ProjectCardAvatar from '@/components/projects/ProjectCardAvatar'
import ProjectCardLinkBadge, { ProjectLinkBadgeProps } from '@/components/projects/ProjectCardLinkBadge'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

enum BadgeColors {
  primary = 'badge-primary',
  secondary = 'badge-secondary',
  accent = 'badge-accent',
  neutral = '',
}

interface Badge {
  text: string
  color: 'primary' | 'secondary' | 'accent' | 'neutral'
}

interface Image {
  data: {
    attributes: { url: string; formats: { medium: { url: string } } }
  } | null
}

interface Author {
  name: string
  githubLink: string
  image: Image | null
}

export interface ProjectCardProps {
  title: string
  description: string
  icon: Image | null
  authors: Author[]
  badges: Badge[]
  links: ProjectLinkBadgeProps[]
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className='card group ring-1 ring-primary hover:ring-2 hover:ring-primary-focus duration-200 min-h-[240px]'>
      <div className='card-body primary-content'>
        <div className='flex mb-4'>
          <div className='avatar'>
            {props.icon !== undefined && props.icon !== null && props.icon.data !== null ? (
              <ProjectCardAvatar
                title={props.title}
                icon={
                  props.icon.data.attributes.formats?.medium?.url || props.icon.data.attributes.url
                }
              />
            ) : (
              <ProjectCardAvatar title={props.title} />
            )}
          </div>
          <div className='flex flex-col ml-4 items-center'>
            {props.badges?.map((badge, index) => (
              <div
                key={index}
                className={`badge ${
                  BadgeColors[badge.color]
                } self-start ml-1 mb-1 whitespace-nowrap`}
              >
                {badge.text}
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center mb-2'>
          <h3 className='text-sm font-bold pr-1'>{props.title}</h3>
          {props.authors.length > 0 && (
            <div
              className={`dropdown dropdown-hover dropdown-top ${
                props.title.length > 20 && 'dropdown-end md:dropdown-start'
              }`}
            >
              <InformationCircleIcon
                tabIndex={0}
                className='btn btn-ghost btn-xs btn-circle align-middle'
              />
              <div className='dropdown-content p-2 shadow bg-base-100 rounded-box w-52 border border-secondary text-slate-500 dark:text-slate-400'>
                {props.authors.length == 1 ? 'Автор: ' : 'Авторы: '}
                {props.authors?.map((author, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link
                        key={index}
                        target='_blank'
                        className='hover:underline text-accent'
                        href={author.githubLink}
                      >
                        {author.name}
                      </Link>
                      {props.authors.length != 1 && props.authors.length - 1 != index && ', '}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          )}
        </div>
        <p className='text-sm text-slate-500 dark:text-slate-400 mb-4'>{props.description}</p>
        {props.links.length !== 0 && (
          <div className='flex'>
            {props.links.map((link, index) => (
              <ProjectCardLinkBadge key={index} website={link.website} link={link.link} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
