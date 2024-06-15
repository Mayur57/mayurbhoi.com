import { NextResponse } from 'next/server'
import { getActivities } from 'src/processor/strava'

export async function GET(req: Request) {
  try {
    if (req.headers.get('Authorization') === `Bearer ${process.env['CRON']}`) {
      const activities = await getActivities()
      return NextResponse.json({ activities })
    } else {
      return NextResponse.json({ error: 'Unauthorised mate' })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
