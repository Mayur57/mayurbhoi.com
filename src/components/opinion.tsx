import { AlertCircleIcon } from 'lucide-react'

const Opinion = () => (
  <div className='not-prose rounded-xl bg-[#FF888822] dark:bg-[#55111155] border-[#FF333344] dark:border-[#FFAAAA66] py-4 px-4 mt-2 mb-4 text-[#AA1111CC] dark:text-[#CC6666] items-center gap-2 text-sm'>
    <div className='flex items-center gap-2 text-md'>
      <AlertCircleIcon size={12} />
      <p className='font-medium tracking-tight'>Contains Opinions</p>
    </div>
    <div className='text-sm opacity-80 mt-2'>
      Opinions ahead! Opinions are always extremely personal—read, ponder, and form your own.
    </div>
  </div>
)

export default Opinion
