//@ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'

interface Activity {
  name: string
  type: string
  timestamp: string
  distance: number
  duration: number
}

interface ActivityCounts {
  [date: string]: number
}

const ActivityGrid: React.FC<{ data: Activity[] }> = ({ data }) => {
  const [activityCounts, setActivityCounts] = useState<ActivityCounts>({})
  const [startDate, setStartDate] = useState<Date>(new Date(new Date().getFullYear(), 0, 1))

  useEffect(() => {
    const counts: ActivityCounts = {}
    data.forEach(activity => {
      const date = activity.timestamp.split('T')[0]
      counts[date] = (counts[date] || 0) + 1
    })
    setActivityCounts(counts)
  }, [data])

  const getColor = (count: number): string => {
    if (count === 0) return 'bg-white dark:bg-[#212121] border-transparent'
    if (count === 1) return 'bg-blue-200 dark:bg-[#0e4429] border-transparent'
    if (count === 2) return 'bg-blue-300 dark:bg-[#006d32] border-transparent'
    if (count === 3) return 'bg-blue-400 dark:bg-[#26a641] border-transparent'
    return 'bg-blue-500 dark:bg-[#39d353] border-transparent'
  }

  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const renderSquares = (): JSX.Element[] => {
    const today = new Date()
    const totalDays =
      Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const startDay = startDate.getDay()

    return Array.from({ length: totalDays }).map((_, index) => {
      const date = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)
      const dateString = formatDate(date)
      const count = activityCounts[dateString] || 0
      const dayOfWeek = (startDay + index) % 7
      const week = Math.floor((startDay + index) / 7)

      return (
        <div
          key={dateString}
          className={`w-3 h-3 ${getColor(count)} rounded-[2px] border border-gray-200 bor`}
          style={{
            gridRow: dayOfWeek + 1,
            gridColumn: week + 1,
          }}
          title={`${dateString}: ${count} activities`}
        />
      )
    })
  }

  return (
    <div className='relative p-2 rounded-md w-full overflow-hidden bg-[#EAEEEA] dark:bg-[#0E0E0E]'>
      <div className='flex justify-end'>
        <div className='flex space-x-4 overflow-x-auto'>
          <div className='grid grid-rows-7 grid-flow-col gap-1 auto-cols-min'>
            {renderSquares()}
          </div>
        </div>
        {/* <div className='mt-4 flex justify-between text-sm text-gray-500'>
          <span>Less</span>
          <div className='flex space-x-1'>
            <div className='w-3 h-3 bg-gray-100 border border-gray-200'></div>
            <div className='w-3 h-3 bg-blue-200 border border-gray-200'></div>
            <div className='w-3 h-3 bg-blue-300 border border-gray-200'></div>
            <div className='w-3 h-3 bg-blue-400 border border-gray-200'></div>
            <div className='w-3 h-3 bg-blue-500 border border-gray-200'></div>
          </div>
          <span>More</span>
        </div> */}
      </div>
    </div>
  )
}

export default ActivityGrid
