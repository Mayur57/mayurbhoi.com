import Link from 'next/link'
import { format } from 'date-fns'

const PostTile = ({ post }: { post: any; index: number }) => (
  <Link href={`/posts/${post.slug}`}>
    <div className={`px-5 py-2 -mx-5 w-full rounded-lg cursor-pointer hover:scale-[0.97] hover:bg-[#EAECEE] dark:hover:bg-[#2A2A2A] transition-all duration-300`}>
      <div className='flex items-center justify-between'>
        <p className='font-medium text-md tracking-tight opacity-75 whitespace-nowrap'>{post.title}</p>
        <div className='h-[1px] mx-2 w-full dark:bg-[#BBB] bg-[#333] opacity-[0.15]' />
        <p className='nums tracking-tighter text-xs opacity-50'>
          {format(new Date(post.uploaded), 'yyyyMMdd')}
        </p>
      </div>
    </div>
  </Link>
)

export default PostTile
