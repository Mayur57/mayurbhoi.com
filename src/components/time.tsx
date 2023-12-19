'use client'

import { useEffect, useState } from 'react'
import { getLocalTime } from 'src/utils/functions'

export const LocalTime = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <p title='IST/+05:30 GMT' className='not-prose mt-0 text-sm opacity-70'>
      <time>{getLocalTime()}</time> local time
    </p>
  )
}
