'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export const revalidate = 0

interface Song {
  title: string
  artist: string
  cover: string
  album: string
  lastPlayed?: string
  isPlaying: boolean
  url: string
}

function Shimmer() {
  return (
    <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-full w-full rounded-md" />
  )
}

function SpotifyWidgetLoading() {
  return (
    <div className='player not-prose flex flex-col bg-[#EAEEEA] dark:bg-[#0E0E0E] border dark:border-[#131313] p-1 rounded-2xl my-10'>
      <a className='flex flex-row gap-4 p-2 bg-[#F7FCFE] dark:bg-[#18181A] rounded-xl shadow-sm'>
        <div className='w-14 h-14 rounded-md'>
          <Shimmer />
        </div>
        <div className='flex flex-col justify-center w-full'>
          <div className="h-4 w-24 mb-2"><Shimmer /></div>
          <div className="h-3 w-20 mb-1"><Shimmer /></div>
          <div className="h-3 w-16"><Shimmer /></div>
        </div>
      </a>
      <div className="pt-[6px] pb-[2px] pl-1.5">
        <div className="h-2 w-32"><Shimmer /></div>
      </div>
    </div>
  )
}

function SpotifyWidgetError() {
  return (
    <div className='player not-prose flex flex-col bg-[#ff00000f] dark:bg-[#77222233] border border-[#ff000028] dark:border-[#ff000021] p-1 rounded-2xl my-10'>
      <div className='flex flex-row gap-4 p-2 bg-[#F7FCFE] dark:bg-[#18181A] rounded-xl shadow-sm'>
        <div className='w-14 h-14 rounded-md bg-[#e4c1c1] dark:bg-[#342121]' />
        <div className='flex flex-col justify-center'>
          <h3 className='text-sm font-medium text-red-700 dark:text-red-300'>Error</h3>
          <p className='text-xs opacity-70 text-red-500'>Failed to load Spotify data</p>
        </div>
      </div>
      <div>
        <span className='flex items-center gap-2 pt-[6px] pb-[2px] pl-1.5 text-xs leading-normal text-gray-500'>
          <div className='h-2 w-2 bg-red-400 dark:bg-red-500 rounded-full' />
          Could not fetch data
        </span>
      </div>
    </div>
  )
}

function SpotifyWidgetLoaded({ data, error }: { data: Song, error?: boolean }) {
  return (
    <div className={`player not-prose flex flex-col p-1 rounded-2xl my-10 ${error ?
      'bg-red-100 dark:bg-red-900 border border-red-500 dark:border-red-700' :
      'bg-[#EAEEEA] dark:bg-[#0E0E0E] border dark:border-[#131313]'}`
    }>
      <a
        href={data.url}
        className='flex flex-row gap-4 p-2 bg-[#F7FCFE] dark:bg-[#18181A] rounded-xl shadow-sm'>
        <Image
          src={data.cover}
          height={56}
          width={56}
          alt='Album Cover'
          className='w-14 h-14 rounded-md'
        />
        <div className='flex flex-col justify-center'>
          <h3 className='text-sm font-medium'>{data.title}</h3>
          <p className='text-xs opacity-70'>{data.artist}</p>
          <p className='text-xs opacity-50'>{data.album}</p>
        </div>
      </a>
      <div>
        {error ? (
          <span className='flex items-center gap-2 pt-[6px] pb-[2px] pl-1.5 text-xs leading-normal text-red-600'>
            <div className='h-2 w-2 bg-red-500 dark:bg-red-400 rounded-full' />
            Could not retrieve last played time
          </span>
        ) : !data.isPlaying && data.lastPlayed ? (
          <span className='flex items-center gap-2 pt-[6px] pb-[2px] pl-1.5 text-xs leading-normal text-gray-500'>
            <div className='h-2 w-2 bg-[#ababab] dark:bg-[#454545] rounded-full' />
            Last played {data.lastPlayed}
          </span>
        ) : (
          data.isPlaying && (
            <span className='flex items-center gap-2 pt-[6px] pb-[2px] pl-1.5 text-xs leading-normal text-gray-500'>
              <div className='h-2 w-2 bg-green-400 dark:bg-green-300 rounded-full' />
              Currently playing
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default function SpotifyWidget() {
  const [data, setData] = useState<Song | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch('/api/spotify')
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const result: Song = await res.json()
        setData(result)
        setError(false)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchSpotifyData()
  }, [])

  if (loading) return <SpotifyWidgetLoading />
  if (error || !data) return <SpotifyWidgetError />

  return <SpotifyWidgetLoaded data={data} error={error} />
}
