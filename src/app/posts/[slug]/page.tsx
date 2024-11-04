import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import readingTime from 'reading-time'
import MainLayout from 'src/components/main-layout'
import { MDX } from 'src/components/mdx'
import { Socials } from 'src/components/socials'
import { Suggestions } from 'src/components/suggestions'
import { getPosts } from 'src/processor/posts'
import { formatDate, formatFullDate, generateSuggestions, urlSafe } from 'src/utils/functions'

export default function ExpandedPost({ params }: any) {
  const sortedPosts = getPosts().sort((a, b) => {
    return new Date(a.metadata.uploaded) < new Date(b.metadata.uploaded) ? -1 : 1
  })
  const post = sortedPosts.find(post => post.metadata.slug === params.slug)
  if (!post) notFound()
  const { title, description, uploaded, updated } = post?.metadata
  const suggestions = generateSuggestions(sortedPosts, post)
  const uploadDate = formatDate(uploaded)
  const updateDate = formatFullDate(new Date(updated))
  const readingMinutes = readingTime(post.content).minutes.toFixed()
  const byline = generateByline(uploadDate, updateDate, readingMinutes)
  return (
    <MainLayout>
      <div className='prose prose-sm sm:prose dark:prose-invert pt-4'>
        <h1 className='sm:pt-6'>{title}</h1>
        <p className='not-prose opacity-70 text-sm py-2'>{description}</p>
        <div className='not-prose flex justify-between opacity-70 text-xs font-medium pb-3'>
          {byline}
        </div>
        {/* <Divider /> */}
        <MDX source={post.content} />
        <Divider />
        <Suggestions suggestions={suggestions} />
        <Socials />
      </div>
    </MainLayout>
  )
}

function generateByline(uploadDate: string, updateDate: string, readingMinutes: string): string {
  const readingText: string = ' • ' + (readingMinutes || '<1') + ' min read'
  const updateText: string = updateDate === uploadDate ? '' : ` • Updated ${updateDate || 'now'}`
  return uploadDate + readingText + updateText
}

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map(post => ({
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

function Divider() {
  return <div className='h-[1px] w-full bg-black opacity-10 dark:bg-white mt-12' />
}
