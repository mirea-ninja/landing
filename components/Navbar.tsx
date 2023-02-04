import Link from 'next/link'
import React from 'react'
import ThemeCheckbox from '@/components/ThemeCheckbox'
import { appName, navbarIconSizeClassName, shortAppName } from '@/constants/constants'
import MNNavigator from '@/components/icons/MNNavigator'
import NavbarLinks from '@/components/NavbarLinks'

export default function Navbar() {
  return (
    <nav className='navbar fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-base-200'>
      <div className='navbar-start'>
        <Link href='/' className='btn btn-ghost normal-case content-center text-xl'>
          <MNNavigator className='w-12 h-12 pr-1' />
          <div className='visible md:invisible md:w-0 md:h-0'>{shortAppName}</div>
          <div className='invisible w-0 h-0 md:visible md:w-fit md:h-fit'>{appName}</div>
        </Link>
      </div>
      <div className='navbar-center'>
        <Link href='/feedback' className='btn btn-ghost'>
          <div className='visible md:invisible md:w-0 md:h-0'>Отзыв</div>
          <div className='invisible w-0 h-0 md:visible md:w-fit md:h-fit'>Написать отзыв</div>
        </Link>
      </div>
      <div className='navbar-end'>
        <ThemeCheckbox iconSize={navbarIconSizeClassName} />
        <NavbarLinks />
      </div>
    </nav>
  )
}
