'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { kv } from '@vercel/kv'

interface LocationContextType {
  location: string | null
}

const LocationContext = createContext<LocationContextType>({
  location: null,
})

export const LastVisitor = () => {
  const [location, setLocation] = useState<any>(null)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let prevLocation = await kv.get('user_location')
        prevLocation = prevLocation || 'somewhere on Earth'
        setLocation(prevLocation)

        const response = await fetch('http://ip-api.com/json')
        const data = await response.json()
        if (data.status === 'success') {
          const { city, country } = data
          await kv.set('user_location', `${city}, ${country}`)
        }
      } catch (err) {}
    }

    fetchLocation()
  }, [])
  return (
    // <LocationContext.Provider value={{ location }}>
    <p className='text-sm opacity-50 select-none'>Last visit from {location || 'pop'}</p>
    // </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)
