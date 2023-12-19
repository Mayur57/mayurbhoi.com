'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

type PhotoProps = {
  src: StaticImageData
}

export const Photo = ({ src }: PhotoProps) => {
  const [tapped, setTapped] = useState(false)
  return (
    <motion.div
      onClick={() => setTapped(!tapped)}
      initial={{ height: '6rem', width: '6rem' }}
      animate={{ height: tapped ? '12rem' : '6rem', width: tapped ? '12rem' : '6rem' }}
      className='group relative transition-all duration-500 z-[2] origin-top-left rounded-xl sm:rounded-2xl overflow-hidden'>
      <motion.div
        initial={{ filter: 'saturate(0) contrast(1.25) brightness(.95)' }}
        animate={{
          filter: tapped
            ? 'saturate(1) contrast(1) brightness(1)'
            : 'saturate(0) contrast(1.25) brightness(.95)',
        }}
        transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className='relative h-full w-full rounded-xl sm:rounded-2xl overflow-hidden select-none pointer-events-none not-prose'>
        <Image
          className='inline-block z-[5]'
          priority
          quality={60}
          src={src}
          fill
          alt='Profile Picture'
          placeholder='blur'
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: tapped ? 0 : 1 }}
          transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className='absolute h-full w-full mix-blend-multiply bg-[url(/noise.svg)] bg-opacity-90 bg-cover bg-center opacity-50 z-10 group-hover:opacity-0'
        />
      </motion.div>
    </motion.div>
  )
}
