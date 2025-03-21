import { NextResponse } from 'next/server'

export const revalidate = 0

const client_id = process.env['SPOTIFY_CLIENT_ID']
const client_secret = process.env['SPOTIFY_CLIENT_SECRET']
const refresh_token = process.env['SPOTIFY_REFRESH']

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1'

function convertDateFormat(inputDate: string) {
  const date = new Date(inputDate)

  // Convert to IST (UTC+5:30)
  date.setMinutes(date.getMinutes() + 330)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const month = months[date.getUTCMonth()]
  const day = date.getUTCDate()

  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')

  return `${month} ${day}, ${hours}:${minutes} IST`
}

function dejunk(s: string) {
  return s
    .replace(/-\s*(Remastered|Live|From\s*\".*?\"|ft\.|feat\.).*/gi, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    //@ts-expect-error idk why typescipt is mad
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  // console.log("get_token", {response})
  const data = await response.json()
  // console.log({data, response})
  return data.access_token
}

const getNowPlaying = async () => {
  let accessToken
  try {
    accessToken = await getAccessToken()
  } catch (err) {
    // console.error("Error getting access token. Spotify service may not be available.")
    throw new Error('Cannot get authentication token.')
  }
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  // console.log("currently_playing", {response})

  if (response.status === 204 || response.status > 400) {
    return null
  }

  const data = await response.json()
  // console.log("currently_playing", {data})
  return data
}

const getRecentlyPlayed = async () => {
  const accessToken = await getAccessToken()

  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    return null
  }
  // console.log("recently_playing", {response})

  const data = await response.json()

  if (!data.items || data.items.length === 0) {
    return null
  }
  // console.log("recently_playing", {data})
  return data.items[0]
}

export async function GET() {
  let nowPlaying
  try {
    nowPlaying = await getNowPlaying()
  } catch (err: any) {
    // console.log("Internal service error", err)
    return NextResponse.json(
      {
        error: 'No healthy upstream. Spotify services are unavailable.',
      },
      { status: 500 }
    )
  }

  if (nowPlaying && nowPlaying.is_playing) {
    const { item } = nowPlaying
    return NextResponse.json({
      title: dejunk(item.name),
      artist: item.artists.map((artist: any) => artist.name).join(', '),
      album: dejunk(item.album.name),
      cover: item.album.images[0]?.url || '',
      isPlaying: true,
      lastPlayed: null,
      url: item.external_urls.spotify || '',
    })
  }

  const recentlyPlayed = await getRecentlyPlayed()

  if (recentlyPlayed) {
    const { track, played_at } = recentlyPlayed
    return NextResponse.json({
      title: dejunk(track.name),
      artist: track.artists.map((artist: any) => artist.name).join(', '),
      album: dejunk(track.album.name),
      cover: track.album.images[0]?.url || '',
      isPlaying: false,
      lastPlayed: convertDateFormat(played_at),
      url: track.external_urls.spotify || '',
    })
  }

  return NextResponse.json(
    {
      title: null,
      artist: null,
      album: null,
      isPlaying: false,
      cover: null,
      lastPlayed: null,
    },
    { status: 500 }
  )
}
