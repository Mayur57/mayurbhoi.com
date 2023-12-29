import { Metadata } from 'next'
import MainLayout from 'src/components/main-layout'
import Title from 'src/components/title'
import { getPosts } from 'src/processor/posts'

import PostTile from './post-tile'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Blog by Mayur Bhoi on software development and other interesting things.',
  openGraph: {
    title: 'Posts',
    description: 'Blog by Mayur Bhoi on software development and other interesting things.',
    url: 'https://mayurbhoi.com/posts',
    type: 'website',
    images: [
      {
        url: 'https://mayurbhoi.com/og?title=Posts&section=true',
        width: 1200,
        height: 630,
        alt: 'Mayur Bhoi',
      },
    ],
  },
}

export default function PostsPage() {
  const blogs = getPosts().sort((a, b) => {
    return new Date(a.metadata.uploaded) > new Date(b.metadata.uploaded) ? -1 : 1
  })
  return (
    <MainLayout>
      <Title>posts</Title>
      <div className='pt-4'>
        <div className='pt-2'>
          {blogs.map((post, index) => (
            <PostTile key={index} post={post.metadata} index={index} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
