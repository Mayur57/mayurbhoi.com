import Link from 'next/link'

import { Theme } from './theme'

const Footer = () => (
  <footer className='flex flex-col-reverse sm:flex-row items-center justify-between py-4'>
    <p className='text-xs opacity-40 pt-2 m-0 sm:pt-6 font-medium'>
      <abbr
        title='free for non-commercial use only'
        className='underline decoration-dotted underline-offset-2 cursor-help'>
        CC BY-NC 4.0
      </abbr>
      <span className='ml-2 cursor-none pointer-events-none select-none'>
        {new Date().getFullYear()} © Mayur Bhoi
      </span>
    </p>
    <div className='flex flex-row-reverse items-center text-xs opacity-40 pt-6 gap-3'>
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
