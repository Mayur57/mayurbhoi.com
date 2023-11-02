import { Info } from 'lucide-react'

const Note = ({ title = 'Note', body = 'This is a note' }) => (
  <div className='not-prose rounded-xl bg-[#00000005] dark:bg-[#FFFFFF0A] py-4 px-4 mt-2 mb-4 items-center gap-2 text-sm'>
    <div className='flex items-center gap-2 text-md'>
      <Info size={12} />
      <p className='font-medium tracking-tight'>{title}</p>
    </div>
    <div className='text-sm opacity-80 mt-2 whitespace-pre-wrap'>{body}</div>
  </div>
)

export default Note
