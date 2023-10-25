import { Metadata } from 'next'
import MainLayout from 'src/components/main-layout'

import Paragraphs from './paragraphs'

export const metadata: Metadata = {}

export default function Home() {
  return (
    <MainLayout>
      <div className='sm:prose dark:prose-invert prose prose-sm prose-a:dark:text-[#D1D5DB] prose-a:underline prose-a:decoration-[#AAA] dark:prose-a:decoration-[#444] prose-a:underline-offset-2'>
        <Paragraphs />
      </div>
    </MainLayout>
  )
}
