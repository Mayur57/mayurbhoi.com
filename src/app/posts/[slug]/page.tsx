import { Metadata } from 'next'
import readingTime from 'reading-time'
import Backlink from 'src/components/backlink'
import { MDX } from 'src/components/mdx'
import Navigator from 'src/components/navigator'
import { getPosts } from 'src/processor/posts'
import { formatDate } from 'src/utils/functions'

export const generateMetadata = ({ params }: any) => {
  const post = getPosts().find(post => post.metadata.slug === params.slug)
  if (!post) return
  const metadata: Metadata = {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: 'https://mayurbhoi.com/posts/' + post.metadata.slug,
      type: 'website',
      images: [
        {
          url: `https://mayurbhoi.com/og?title=${post.metadata.title}`,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.description,
      images: [`https://mayurbhoi.com/og?title=${post.metadata.title}`],
    },
  }
  return metadata
}

export default function ExpandedPost({ params }: any) {
  const post = getPosts().find(post => post.metadata.slug === params.slug)
  if (!post) return
  return (
    <article className='mx-auto max-w-2xl py-8 px-6 xs:px-0 pt-8 sm:pt-[3rem] pb-[16rem]'>
      <Navigator />
      <Backlink href='/posts' />
      <div className='prose prose-sm sm:prose dark:prose-invert'>
        <h1>{post?.metadata.title}</h1>
        <p className='not-prose opacity-70 text-sm pt-3 pb-2'>{post?.metadata.description}</p>
        <div className='not-prose flex justify-between opacity-70 text-xs font-mono font-medium pb-4'>
          {`${formatDate(post?.metadata.uploaded)} • ${
            readingTime(post.content).minutes.toFixed() === '0'
            ? '<1'
            : readingTime(post.content).minutes.toFixed()
          } minute read`}
          </div>
        <MDX source={post.content} />
        <div className='h-[1px] w-full bg-black opacity-10 dark:bg-white' />
      </div>
    </article>
  )
}
