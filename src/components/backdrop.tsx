'use client'

import { usePathname } from 'next/navigation'

const GridBackdrop = () => {
  const path = usePathname()
  return (
    path !== '/' && (
      <div>
        <div className='absolute inset-0 h-60 w-full bg-white dark:bg-[#121212] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,#FFF,transparent)]' />
      </div>
    )
  )
}

export default GridBackdrop
