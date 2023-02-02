import Link from 'next/link'
import React from 'react'
import { GitHubLink, navbarIconSizeClassName, TelegramLink, VKLink } from '@/constants/constants'
import VKLogo from '@/components/icons/VKLogo'
import TelegramLogo from '@/components/icons/TelegramLogo'
import GitHubLogo from '@/components/icons/GitHubLogo'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const links: { link: string; icon: JSX.Element }[] = [
  { link: TelegramLink, icon: <TelegramLogo /> },
  { link: VKLink, icon: <VKLogo /> },
  { link: GitHubLink, icon: <GitHubLogo /> },
]

export default function NavbarLinks() {
  return (
    <>
      {/*small screen*/}
      <div className='visible md:invisible md:w-0 md:h-0 dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-square btn-ghost'>
          <ChevronDownIcon className={navbarIconSizeClassName} />
        </label>
        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box'>
          {links.map(({ link, icon }, index) => (
            <li key={index}>
              <Link
                href={link}
                key={index}
                target='_blank'
                className='btn btn-ghost content-center hover:text-current'
              >
                <div className={navbarIconSizeClassName}>{icon}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*medium or bigger screen*/}
      <div className='invisible w-0 h-0 md:visible md:w-fit md:h-fit'>
        {links.map(({ link, icon }, index) => {
          return (
            <Link href={link} key={index} target='_blank' className='btn btn-square btn-ghost'>
              <div className={navbarIconSizeClassName}>{icon}</div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
