'use client'

import { createContext, useEffect, useState } from 'react'

interface LocationContextType {
  location: string | null
}

// Provide a default value to avoid TypeScript errors
const LocationContext = createContext<LocationContextType>({
  location: null,
})

export const LastVisitor = () => {
  const [location, setLocation] = useState('Loading...')

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Fetch the previous location
        const res = await fetch('/api/location')
        const { location } = await res.json()
        setLocation(location)

        // Fetch current location and store in KV
        const ipRes = await fetch('http://ip-api.com/json')
        const ipData = await ipRes.json()
        if (ipData.status === 'success') {
          const { city, country } = ipData
          await fetch('/api/location', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ city, country }),
          })
        }
      } catch (error) {
        console.error('Error fetching or updating location:', error)
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
