'use client'

import localFont from 'next/font/local'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { staggerRank } from 'src/utils/functions'

const mono = localFont({ src: './../fonts/SFMono-Regular.otf', preload: true })

const PostTile = ({ post, index }: { post: Post; index: number }) => (
  <Link href={`/posts/${post.slug}`}>
    <motion.div
      {...staggerRank(index > 7 ? 7 : index)}
      className='flex items-center justify-start px-2 py-4 gap-6 dark:hover:bg-[#232323] hover:bg-[#EAEAEA] cursor-ne-resize'>
      <div>
        <p className={`${mono.className} font-mono text-xs opacity-50`}>{post.tag}</p>
        <p className={`${mono.className} font-mono text-xs opacity-50`}>
          {format(new Date(post.uploaded), 'yyyyMMdd')}
        </p>
      </div>
      <div>
        <p className='font-medium text-md tracking-tight'>{post.title}</p>
        <p className='opacity-60 text-sm'>{post.description}</p>
      </div>
    </motion.div>
  </Link>
)

export default PostTile
