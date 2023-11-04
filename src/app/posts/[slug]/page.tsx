import { Metadata } from 'next'
import { allPosts, Post } from 'contentlayer/generated'
import { format } from 'date-fns'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Tweet } from 'react-tweet'
import readingTime from 'reading-time'
import Backlink from 'src/components/backlink'
import Navigator from 'src/components/navigator'
import Note from 'src/components/notes'
import Opinion from 'src/components/opinion'

const mdxComponents: MDXComponents = {
  Tweet: ({ id, caption }) => (
    <div className='flex not-prose flex-col justify-center items-center'>
      <Tweet id={id} />
      {caption && <p className='text-xs opacity-50 -mt-1 pb-4'>{caption}</p>}
    </div>
  ),
  Opinion: () => <Opinion />,
  Note: ({ title, body }) => <Note title={title} body={body} />,
}

export const generateStaticParams = async () => allPosts.map(post => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  const metadata: Metadata = {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: 'https://mayurbhoi.com/posts/' + post.slug,
      type: 'website',
      images: [
        {
          url: `https://mayurbhoi.com/og?title=${post.title}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://mayurbhoi.com/og?title=${post.title}`],
    },
  }
  return metadata
}

export default function ExpandedPost({ params }: { params: { slug: string } }) {
  const post: Post | undefined = allPosts.find((post: Post) => post.slug === params.slug.toString())
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  const MDX = useMDXComponent(post.body.code)
  return (
    <article className='mx-auto max-w-2xl py-8 px-6 xs:px-0 pt-8 sm:pt-[3rem]'>
      <Navigator />
      <Backlink href='/posts' />
      <div className='prose prose-sm sm:prose dark:prose-invert prose-img:m-0 prose-img:rounded-lg max-w-none prose-h1:mb-0 prose-h6:my-0 pb-[7rem] prose-h1:font-medium prose-h1:tracking-tight prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:tracking-tight prose-a:dark:text-[#D1D5DB] prose-a:underline prose-a:decoration-[#AAA] dark:prose-a:decoration-[#444] prose-a:underline-offset-2'>
        <h1>{post.title}</h1>
        <h6 className='opacity-70 text-sm pt-3 pb-2'>{post.description}</h6>
        <h6 className='opacity-70 text-xs font-mono font-medium pb-4'>
          {format(new Date(post?.uploaded), 'MMMM dd, yyyy')} •{' '}
          {`${
            readingTime(post?.body.raw).minutes.toFixed() === '0'
              ? '<1'
              : readingTime(post?.body.raw).minutes.toFixed()
          } minute read`}
        </h6>
        <MDX components={mdxComponents} />
      </div>
    </article>
  )
}
