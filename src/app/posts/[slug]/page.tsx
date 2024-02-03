import { Metadata } from 'next'
import readingTime from 'reading-time'
import MainLayout from 'src/components/main-layout'
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

const Socials = () => (
  <div className='flex gap-1 text-sm items-center mt-12'>
    <div className='h-2 w-2 rounded-full bg-[#EC672C]' />
    <a href="https://github.com/mayur57" className='pl-2'>Github</a>·
    <a href="https://twitter.com/mayurbhoii">Twitter</a>·
    <a href="https://linked.com/in/mayur-bhoi">LinkedIn</a>·
    <a href="mailto:me@mayurbhoi.com">me@mayurbhoi.com</a>
  </div>
)

export default function ExpandedPost({ params }: any) {
  const post = getPosts().find(post => post.metadata.slug === params.slug)
  if (!post) return
  return (
    <MainLayout>

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
        <div className='h-[1px] w-full bg-black opacity-10 dark:bg-white my-8' />
        <Socials />
      </div>
    </MainLayout>
  )
}
