'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const GridBackdrop = () => {
  const path = usePathname()
  return (
    path !== '/' && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 1 }}>
        <div className='absolute inset-0 h-60 w-full bg-white dark:bg-[#121212] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,#FFF,transparent)]' />
      </motion.div>
    )
  )
}

export default GridBackdrop
