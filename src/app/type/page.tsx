'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [text, setText] = useState<string>('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current
      textarea.style.height = 'auto' // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px` // Set new height based on scrollHeight
    }
  }, [text])

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#18181A] p-4'>
      <div className='relative w-full max-w-lg'>
        <textarea
          ref={textareaRef}
          className='w-full p-3 rounded-lg resize-none overflow-hidden bg-transparent focus:outline-hidden focus:border-blue-400 absolute bottom-0'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Type something...'
        />
      </div>
    </div>
  )
}
