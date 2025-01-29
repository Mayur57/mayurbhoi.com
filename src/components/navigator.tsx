import Link from 'next/link'

const NavigatorItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href} as={href} className={`text-sm sm:text-base tracking-tight`}>
    <p>{label}</p>
  </Link>
)

const Navigator = () => (
  <nav className='flex w-full gap-4 pb-8 justify-end'>
    <NavigatorItem label='home' href='/' />
    <NavigatorItem label='posts' href='/posts' />
    <NavigatorItem label='posters' href='/media' />
    <NavigatorItem label='resume' href='/resume.pdf' />
  </nav>
)

export default Navigator
