'use client'
import Link from 'next/link'

import { Theme } from './theme'

const Footer = () => (
  <footer className='flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between pt-8 pb-4 text-xs opacity-40 font-medium'>
    <p className=''>
      <abbr
        title='free for non-commercial use only. applicable internationally, perpetually.'
        className='underline decoration-dotted underline-offset-2 cursor-help'>
        CC BY-NC 4.0
      </abbr>
      <span
        title='site and its contents under copyright by mayur bhoi in all jurisdictions'
        className='ml-2 cursor-none pointer-events-none select-none'>
        {new Date().getFullYear()} © Mayur Bhoi
      </span>
    </p>
    <div className='flex flex-row-reverse gap-3'>
      <Link href='/privacy' title='view privacy statement'>
        Privacy
      </Link>
      <a title='source code' href='https://github.com/mayur57/mayurbhoi.com'>
        Source
      </a>
      <Theme />
    </div>
  </footer>
)

export default Footer
