'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSwipeable } from 'react-swipeable'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { Poster } from 'src/lib/types'
import { cn } from 'src/utils/functions'

export function PosterView({
  poster,
  adjacentPosters,
}: {
  poster: Poster
  adjacentPosters: Poster[]
}) {
  const router = useRouter()
  const { width } = useWindowSize()
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [currentPoster, setCurrentPoster] = useState(poster)
  const [posters, _] = useState([...adjacentPosters, poster])

  const isMobile = (width || 0) < 1024

  const handleNavigation = (direction: 'prev' | 'next') => {
    const currentIndex = posters.findIndex(p => p.slug === currentPoster.slug)

    // Ensure we have valid posters array
    if (posters.length === 0) {
      throw new Error('No posters available for navigation')
    }

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % posters.length
        : (currentIndex - 1 + posters.length) % posters.length

    const newPoster = posters[newIndex]

    if (!newPoster) {
      throw new Error(`Failed to find poster at index ${newIndex}`)
    }

    setCurrentPoster(newPoster)
    router.replace(`/media/${newPoster.slug}`, { scroll: false })
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => isMobile && handleNavigation('next'),
    onSwipedRight: () => isMobile && handleNavigation('prev'),
    trackMouse: true,
  })

  useEffect(() => {
    setCurrentPoster(poster)
    setIsTextVisible(false)
  }, [poster])

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <div
        {...swipeHandlers}
        className={cn(
          'relative h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]',
          isTextVisible && !isMobile ? 'translate-x-[-35%]' : ''
        )}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='relative w-full max-w-4xl h-[80vh]'>
            <Image
              src={currentPoster.imageUrl}
              alt={currentPoster.title}
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>

        {/* Navigation Controls (Desktop) */}
        {!isMobile && (
          <div className='absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8'>
            <button
              onClick={() => handleNavigation('prev')}
              className='bg-white/10 backdrop-blur-lg p-4 rounded-full hover:bg-white/20 transition-colors'>
              ←
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className='bg-white/10 backdrop-blur-lg p-4 rounded-full hover:bg-white/20 transition-colors'>
              →
            </button>
          </div>
        )}

        {/* Text Toggle Button */}
        <button
          onClick={() => setIsTextVisible(!isTextVisible)}
          className={cn(
            'absolute right-8 bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-colors',
            isMobile ? 'bottom-8' : 'top-8'
          )}>
          {isTextVisible ? '×' : 'i'}
        </button>
      </div>

      {/* Text Content */}
      <div
        className={cn(
          'absolute transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]',
          isMobile
            ? 'inset-x-0 bottom-0 p-4 text-center'
            : 'top-1/2 right-8 w-[30%] -translate-y-1/2',
          isTextVisible
            ? 'opacity-100 translate-y-0 blur-none'
            : cn(isMobile ? 'opacity-0 translate-y-10 blur-md' : 'opacity-0 translate-x-10 blur-md')
        )}>
        <h1 className='text-4xl font-bold mb-4'>{currentPoster.title}</h1>
        <p className='text-lg opacity-80'>{currentPoster.description}</p>
      </div>
    </div>
  )
}
