import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import readingTime from 'reading-time'
import MainLayout from 'src/components/main-layout'
import { MDX } from 'src/components/mdx'
import { Socials } from 'src/components/socials'
import { getPosts } from 'src/processor/posts'
import { formatDate } from 'src/utils/functions'

function urlSafe(str: string) {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16))
}

export default function ExpandedPost({ params }: any) {
  const post = getPosts().find(post => post.metadata.slug === params.slug)
  if (!post) {
    notFound()
  }
  return (
    <MainLayout>
      <div className='prose prose-sm sm:prose dark:prose-invert pt-4'>
        <h1>{post?.metadata.title}</h1>
        <p className='not-prose opacity-70 text-sm pt-3 pb-2'>{post?.metadata.description}</p>
        <div className='not-prose flex justify-between opacity-70 text-xs font-mono font-medium pb-4'>
          {`${formatDate(post?.metadata.uploaded)} • ${
            readingTime(post.content).minutes.toFixed() === '0'
            ? '<1'
            : readingTime(post.content).minutes.toFixed()
          } minute read`}
          </div>
        <div className='h-[1px] w-full bg-black opacity-10 dark:bg-white mt-2 mb-8' />
        <MDX source={post.content} />
        <div className='h-[1px] w-full bg-black opacity-10 dark:bg-white my-8' />
        <Socials />
      </div>
    </MainLayout>
  )
}

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }))
}

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
          url: `https://mayurbhoi.com/og?title=${urlSafe(post.metadata.title)}`,
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
      images: [`https://mayurbhoi.com/og?title=${urlSafe(post.metadata.title)}&twitter=true`],
    },
  }
  return metadata
}