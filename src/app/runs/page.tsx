import { LiaRunningSolid } from 'react-icons/lia'
import MainLayout from 'src/components/main-layout'
import Title from 'src/components/title'
import { getActivities } from 'src/processor/strava'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toLongDate } from 'src/utils/functions'

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
  const currentDate = new Date(2024, 0, 1) // Starting from January 1, 2024
  const endDate = new Date(2025, 0, 1) // Up to but not including January 1, 2025

  // Loop through each day from start date to end date
  while (currentDate < endDate) {
    const month = formatToTwoDigits(currentDate.getMonth() + 1)
    const day = formatToTwoDigits(currentDate.getDate())
    const key = "XSD_" + month + day
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
  return "XSD_" + month + day
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

  const totalDistance: string = (
    [...Object.values(groupedRuns).flat()].reduce((acc: number, dist: number) => acc + dist, 0) /
    1000.0
  ).toFixed(3)

  return (
    <MainLayout>
      <Title>runs</Title>
      <div className='flex flex-col items-start justify-center overflow-x-auto py-10 no-scrollbar'>
        <div className='flex items-end overflow-hidden snap-x-mandatory'>
          {Object.entries(groupedRuns).map(([date, runs]: any[]) => (
            <TooltipProvider key={date}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className='flex flex-col items-center rounded-full p-1 snap-center'>
                    {runs.length > 0 ? (
                      runs.map((run: string, index: number) => {
                        const distance = parseFloat(run)
                        const height = (distance / maxDistance) * 300 // Scale height with max 200px
                        return (
                          <div
                            key={index}
                            className={`${date.split("_")[1].substring(2) === '01' ? 'bg-red-500' : 'bg-blue-500'} rounded w-[1px] my-[2px]`}
                            style={{ height: `${height}px` }}
                            title={`${(distance / 1000).toFixed(3)}km`}></div>
                        )
                      })
                    ) : (
                      <div
                        className={`${date.split("_")[1].substring(2) === '01' ? 'bg-red-500' : 'bg-[#bbbbbb]'} rounded-full w-[1px] my-[2px]`}
                        style={{ height: `30px` }}
                        title={`${date} - Rest/cheat day`}></div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{toLongDate(date.split("_")[1])}</p>
                  <div className='flex flex-row items-center justify-center text-sm gap-1 opacity-80'>
                    <LiaRunningSolid size={14} />
                    <p className='tabular-nums'>
                      {(runs.reduce((acc: number, dist: number) => acc + dist, 0.00)/1000).toFixed(3) + ' kms'}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center text-md gap-1 opacity-80'>
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
