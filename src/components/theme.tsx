'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { capitalised } from 'src/utils/functions'

export const Theme = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevents SSR mismatch errors
  // Only determine the theme when the component mounts on client-side
  if (!mounted) {
    return null
  }

  return (
    <button
      className='flex flex-row gap-1 items-center'
      title='change theme'
      onClick={() =>
        setTheme(theme == 'system' || theme == '' ? 'dark' : theme === 'dark' ? 'light' : 'system')
      }>
        Theme: 
      <span className='underline-offset-2 decoration-dotted'>{capitalised(theme)}</span>
    </button>
  )
}
