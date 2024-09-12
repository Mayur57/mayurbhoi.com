'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Song {
  title: string
  artist: string
  cover: string
  album: string
  lastPlayed?: string
  isPlaying: boolean
  url: string
}

export default function SpotifyWidget() {
  const [data, setData] = useState<Song | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch('/api/spotify')
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await res.json()
        setData(result)
        setLoading(false)
      } catch (err: any) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchSpotifyData()
  }, []) // Fetch data when the component mounts

  if (loading) return <></>
  if (error) return <></>

  return (
    <div className='player not-prose flex flex-col bg-[#EAEEEA] dark:bg-[#0E0E0E] border dark:border-[#131313] p-1 rounded-2xl my-10'>
      <a href={data?.url} className='flex flex-row gap-4 p-2 bg-[#F7FCFE] dark:bg-[#18181A] rounded-xl shadow-sm'>
        <Image
          src={data!.cover}
          height={56}
          width={56}
          alt='Album Cover'
          className='w-14 h-14 rounded-md'
        />
        <div className='flex flex-col justify-center'>
          <h3 className='text-sm font-medium'>{data?.title}</h3>
          <p className='text-xs opacity-70'>{data?.artist}</p>
          <p className='text-xs opacity-50'>{data?.album}</p>
        </div>
      </a>
      <div>
        {!data?.isPlaying && data?.lastPlayed && (
          <span className='flex items-center gap-2 pt-[6px] pb-[2px] pl-1.5 text-xs leading-normal text-gray-500'>
            <div className='h-2 w-2 bg-[#ababab] dark:bg-[#454545] rounded-full' />
            Last played {data.lastPlayed}
          </span>
        )}
        {data?.isPlaying && (
          <span className='flex items-center gap-2 pt-[6px] pb-[2px] pl-1.5 text-xs leading-normal text-gray-500'>
            <div className='h-2 w-2 bg-green-400 dark:bg-green-300 rounded-full' />
            Currently playing
          </span>
        )}
      </div>
    </div>
  )
}
