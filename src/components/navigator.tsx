'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigatorItem = ({
  active,
  label,
  href,
}: {
  active: boolean
  label: string
  href: string
}) => (
  <Link
    href={href}
    className={`font-medium text-sm sm:text-base tracking-tight ${active ? `underline decoration-from-font underline-offset-2` : `opacity-40`
      }`}>
    <p>{label}</p>
  </Link>
)

const Navigator = () => {
  const path = usePathname()
  return (
    <nav className='flex w-full gap-4 pb-8 justify-end'>
      <NavigatorItem active={path === '/'} label='home' href='/' />
      <NavigatorItem
        active={path === '/posts' || path.includes('/posts')}
        label='posts'
        href='/posts'
      />
      <NavigatorItem active={path === '/resume.pdf'} label='resume' href='/resume.pdf' />
    </nav>
  )
}

export default Navigator
