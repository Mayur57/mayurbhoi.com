import Link from 'next/link'

export const Suggestions = ({ suggestions }: any) => {
  const { previous, next } = suggestions
  return (
    <div className='not-prose flex flex-row items-start pt-3 justify-between'>
      {previous ? (
        <div className='flex flex-col w-1/2 max-w-1/2 p-1 items-start justify-center'>
          <Link className='cursor-pointer' href={`/posts/${previous?.metadata.slug}`}>
            <p className='opacity-50 text-[12px]'>← Previous</p>
            <p className='text-[15px]'>{previous?.metadata.title}</p>
          </Link>
        </div>
      ) : (
        <div className='pointer-events-none select-none'>
          <p> </p>
          <p> </p>
        </div>
      )}
      {next && (
        <div className='flex flex-col w-1/2 max-w-1/2 p-1 justify-center'>
          <Link className='cursor-pointer' href={`/posts/${next.metadata.slug}`}>
            <p className='opacity-50 text-[12px] text-right'>Next →</p>
            <p className='text-right text-[15px]'>{next.metadata.title}</p>
          </Link>
        </div>
      )}
    </div>
  )
}
