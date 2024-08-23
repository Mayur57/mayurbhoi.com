'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface LocationContextType {
  location: string | null
}

const LocationContext = createContext<LocationContextType>({
  location: 'somewhere on Earth',
})

export const LastVisitor = () => {
  const [location, setLocation] = useState<any>(null)
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('http://ip-api.com/json')
        const data = await response.json()

        if (data.status === 'success') {
          const { city, country } = data
          setLocation(`${city}, ${country}`)
        } else {
          setLocation('somewhere on Earth')
        }
      } catch (err) {
        setError('Error fetching location.')
      }
    }

    fetchLocation()
  }, [])
  return (
    <LocationContext.Provider value={{ location }}>
      <p className='text-sm opacity-50 select-none'>Last visit from {location}</p>
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)
