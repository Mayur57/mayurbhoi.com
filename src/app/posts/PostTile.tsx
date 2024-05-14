import Link from 'next/link'
import { format } from 'date-fns'
import { stagger } from 'src/utils/functions'

const PostTile = ({ post, index }: { post: any; index: number }) => (
  <Link href={`/posts/${post.slug}`}>
    <div className={`appear ${stagger(index > 3 ? 5 : index)} py-[10px] cursor-pointer`}>
      <div className='flex items-center justify-between dark:hover:opacity-30 hover:opacity-30 transition-all duration-300'>
        <p className='font-medium text-md tracking-tight whitespace-nowrap'>{post.title}</p>
        <div className='h-[1px] mx-2 w-full dark:bg-[#BBB] bg-[#333] opacity-[0.15]' />
        <p className='nums tracking-tighter text-xs opacity-50'>
          {format(new Date(post.uploaded), 'yyyyMMdd')}
        </p>
      </div>
    </div>
  </Link>
)

export default PostTile
