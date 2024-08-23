'use client'

import { useEffect, useState } from 'react';

export const LastVisitor = () => {
  const [location, setLocation] = useState('Loading...');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Fetch the previous location from your API route
        const res = await fetch('/api/location');
        const { location } = await res.json();
        setLocation(location);

        // Fetch current location from IP API and update it on the server
        const ipRes = await fetch('http://ip-api.com/json');
        const ipData = await ipRes.json();
        if (ipData.status === 'success') {
          const { city, country } = ipData;
          await fetch('/api/location', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ city, country }),
          });
        }
      } catch (error) {
        console.error('Error fetching or updating location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <p className='text-sm opacity-50 select-none'>
      Last visit from {location}
    </p>
  );
};
