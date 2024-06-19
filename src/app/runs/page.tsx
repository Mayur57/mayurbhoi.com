import { LiaRunningSolid } from 'react-icons/lia'
import MainLayout from 'src/components/main-layout'
import Title from 'src/components/title'
import { getActivities } from 'src/processor/strava'

export const revalidate = 3600 // revalidate every hour

interface GroupedActivities {
  [key: string]: number[] // Assuming each value is an array of numbers
}

// Helper function to format numbers to two digits
function formatToTwoDigits(number: number): string {
  return number < 10 ? '0' + number : '' + number
}

function generateDateObject(): { [key: string]: any[] } {
  const dateObject: { [key: string]: any[] } = {}

  // Initialize the start date (January 1)
  let currentDate = new Date(2024, 0, 1) // Starting from January 1, 2024
  const endDate = new Date(2025, 0, 1) // Up to but not including January 1, 2025

  // Loop through each day from start date to end date
  while (currentDate < endDate) {
    const month = formatToTwoDigits(currentDate.getMonth() + 1)
    const day = formatToTwoDigits(currentDate.getDate())
    const key = month + day
    dateObject[key] = []

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dateObject
}

function formatDate(utcTimestamp: string): string {
  const date = new Date(utcTimestamp)
  const month = formatToTwoDigits(date.getUTCMonth() + 1)
  const day = formatToTwoDigits(date.getUTCDate())
  return month + day
}

function groupReadingsByDate(activities: any) {
  const groupedReadings: any = generateDateObject()
  activities.forEach((activity: any) => {
    const { timestamp, distance } = activity
    const formattedDate = formatDate(timestamp)
    if (!groupedReadings[formattedDate]) {
      groupedReadings[formattedDate] = []
    }
    groupedReadings[formattedDate].push(distance)
  })
  return groupedReadings
}

export default async function RunsPage() {
  const activities = await getActivities()
  const groupedRuns: GroupedActivities = groupReadingsByDate(activities)
  const maxDistance = Math.max(
    ...Object.values(groupedRuns)
      .flat()
      .map((run: any) => parseFloat(run))
  )

  const totalDistance: string =
    ([...Object.values(groupedRuns).flat()].reduce((acc: number, dist: number) => acc + dist, 0) / 1000.0).toFixed(3)

  return (
    <MainLayout>
      <Title>runs</Title>
      <div className='flex flex-col items-start justify-center overflow-x-auto py-10'>
        <div className='flex items-end overflow-hidden snap-x-mandatory'>
          {Object.entries(groupedRuns).map(([date, runs]: any[]) => (
            <div key={date} className='flex flex-col items-center rounded-full p-1 snap-center'>
              {runs.length > 0 ? (
                runs.map((run: string, index: number) => {
                  const distance = parseFloat(run)
                  const height = (distance / maxDistance) * 300 // Scale height with max 200px
                  return (
                    <div
                      key={index}
                      className={`${date.substring(2) === '01' ? 'bg-red-500' : 'bg-blue-500'} rounded w-[1px] my-[1px]`}
                      style={{ height: `${height}px` }}
                      title={`${distance}m`}></div>
                  )
                })
              ) : (
                <div
                  className={`${date.substring(2) === '01' ? 'bg-red-500' : 'bg-[#bbbbbb]'} rounded-full w-[1px] my-[1px]`}
                  style={{ height: `30px` }}
                  title={`${date} Rest/cheat day`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center text-sm gap-1 opacity-80'>
        <LiaRunningSolid />
        <a
          className='underline underline-offset-2 decoration-slate-700'
          href='https://www.strava.com/athletes/114442884'>
          {totalDistance + ' kms'}
        </a>
      </div>
    </MainLayout>
  )
}
