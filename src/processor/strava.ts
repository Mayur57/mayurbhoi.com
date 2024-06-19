import fs from 'fs'
import path from 'path'

const clientId = process.env['STRAVA_CLIENT_ID']
const clientSecret = process.env['STRAVA_CLIENT_SECRET']
const tokensFilePath = path.join(process.cwd(), 'cache.json')

const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token'
const ACTIVITIES_ENDPOINT = 'https://www.strava.com/api/v3/athlete/activities'

interface Tokens {
  access_token: string
  refresh_token: string
  expires_at: number // Unix timestamp
}

function readTokens(): Tokens {
  if (fs.existsSync(tokensFilePath)) {
    const tokensData = fs.readFileSync(tokensFilePath, 'utf-8')
    return JSON.parse(tokensData)
  }
  return {
    access_token: process.env['STRAVA_ACCESS_TOKEN'] || '',
    refresh_token: process.env['STRAVA_REFRESH_TOKEN'] || '',
    expires_at: parseInt(process.env['STRAVA_TOKEN_EXPIRATION'] || '0', 10),
  }
}

function saveTokens(tokens: Tokens) {
  fs.writeFileSync(tokensFilePath, JSON.stringify(tokens, null, 2))
}

async function refreshAccessToken(tokens: Tokens) {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: tokens.refresh_token,
      grant_type: 'refresh_token',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to refresh access token')
  }

  const data = await response.json()
  const newTokens = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: data.expires_at, // Unix timestamp
  }
  saveTokens(newTokens)

  return newTokens
}

async function getAccessToken() {
  let tokens = readTokens()
  const now = Math.floor(Date.now() / 1000) // Current Unix timestamp

  if (tokens.expires_at <= now) {
    tokens = await refreshAccessToken(tokens)
  }

  return tokens.access_token
}

export async function getActivities() {
  const accessToken = await getAccessToken()
  const response = await fetch(ACTIVITIES_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch activities')
  }

  const activities = await response.json()
  const data: any[] = []
  activities.forEach((activity: any) => {
    data.push({
      name: activity.name,
      type: activity.type,
      timestamp: activity.start_date_local,
      distance: activity.distance,
      duration: activity.moving_time,
    })
  })
  return data
}
