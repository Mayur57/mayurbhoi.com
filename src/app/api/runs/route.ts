import { NextResponse } from 'next/server'
import { getActivities } from 'src/processor/strava'
import { headers } from 'next/headers'

export async function GET(req: Request) {
  try {
    const headerList = headers()
    if (headerList.get('Authorization') !== `Bearer ${process.env['CRON']}`)
      return NextResponse.json({ error: 'Unauthorised mate' })
    const activities = await getActivities()
    return NextResponse.json({ data: activities })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
