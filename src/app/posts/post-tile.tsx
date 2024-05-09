import Link from 'next/link'
import { format } from 'date-fns'
import { stagger } from 'src/utils/functions'

const PostTile = ({ post, index }: { post: any; index: number }) => (
  <Link href={`/posts/${post.slug}`}>
    <div
      className={`appear ${stagger(index > 3 ? 5 : index)} flex items-center justify-start px-2 py-3 gap-6 dark:hover:bg-[#232323] hover:bg-[#EAEAEA] cursor-ne-resize`}>
      <div>
        <p className='font-mono font-medium text-xs opacity-50'>{post.tag}</p>
        <p className='font-mono font-medium text-xs opacity-50'>
          {format(new Date(post.uploaded), 'yyyyMMdd')}
        </p>
      </div>
      <div>
        <p className='font-medium text-md tracking-tight'>{post.title}</p>
        <p className='opacity-60 text-sm'>{post.description}</p>
      </div>
    </div>
  </Link>
)

export default PostTile
