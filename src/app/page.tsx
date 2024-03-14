import { Metadata } from 'next'
import Link from 'next/link'
import me from 'public/me.webp'
import MainLayout from 'src/components/main-layout'
import { Photo } from 'src/components/photo'
import { LocalTime } from 'src/components/time'
import { Venn } from 'src/components/venn'
import { getPosts } from 'src/processor/posts'
import { stagger } from 'src/utils/functions'

export const metadata: Metadata = {}

const featuredProjects = [
  {
    title: 'Countless',
    description: 'A Chrome extension to disable Tweet View counts across the platform',
    repo: 'https://github.com/Mayur57/countless',
  },
  {
    title: 'Twitter Nuke',
    description: 'Tool to delete all user tweets using Twitter Archive to bypass rate limits',
    repo: 'https://github.com/Mayur57/twitter-nuke',
  },
]

const featuredPosts = getPosts()
  .sort((a, b) => {
    return new Date(a.metadata.uploaded) > new Date(b.metadata.uploaded) ? -1 : 1
  })
  .slice(0, 2)

export default function Home() {
  return (
    <MainLayout>
      <div className='sm:prose dark:prose-invert prose prose-sm'>
        <div>
          <div className={`appear ${stagger(1)} w-full flex justify-start items-center pb-5`}>
            <Photo src={me} />
          </div>

          <div className={`appear ${stagger(2)} not-prose pt-3`}>
            <strong className='tracking-tight flex flex-row items-center'>
              Mayur Bhoi
              <span
                className='h-[0.9rem] w-[0.9rem] ml-1'
                title='got verified for free; checkmate elon.'>
                <svg viewBox='0 0 24 24' role='img' fill='#1D9BF0' data-testid='icon-verified'>
                  <g>
                    <path d='M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z' />
                  </g>
                </svg>
              </span>
            </strong>
            <p className='tracking-tight -mt-1 opacity-70'>Full Stack Developer</p>

            {/*
            TODO: If looking for new job, then enable
            <div className='flex w-max items-center border py-[0.125em] px-2 rounded-full'>
              <div className='rounded-full bg-green-400 h-2 w-2' />
              <p className='text-[10px] pl-[6px]'>Open to new opportunities!</p>
            </div>
            */}
          </div>

          <p className={`appear ${stagger(3)} pt-4`}>
            Writing impactful & elegant software. Relentlessly devoted to intricacy, efficiency, and
            detailed polish. Unsatisfiably curious about magical design and high performance
            systems.
          </p>

          <p className={`appear ${stagger(4)} pt-4`}>
            Based in <a href="https://www.google.com/maps/place/Bengaluru,+Karnataka">Bengaluru, India</a>, I have been working as Software Engineer II
            at <a href='https://ncr.com'>NCR</a>.
          </p>

          <div
            className={`appear ${stagger(
              5
            )} flex no-scrollbar overflow-scroll gap-2 py-8 sm:[mask-image:linear-gradient(to_right,#000_0,#000_100%)] [mask-image:linear-gradient(to_right,#000_0,#000_75%,transparent_100%)]`}>
            <div className='w-[260px] sm:w-[304px] pr-6 flex-shrink-0'>
              <p className='opacity-60 text-sm font-medium tracking-tight'>Projects</p>
              <div className='flex flex-col gap-6'>
                {featuredProjects?.map((project, index) => (
                  <div key={index} className='pr-4'>
                    <a
                      href={project.repo}
                      className='underline decoration-from-font underline-offset-2 tracking-tight'>
                      {project.title}
                    </a>
                    <p className='mt-1 opacity-60 not-prose leading-snug text-sm'>
                      {project.description}
                    </p>
                  </div>
                ))}
                <a href='https://github.com/mayur57'>All projects -&gt;</a>
              </div>
            </div>
            <div className='w-[260px] sm:[304px] flex-shrink-0 mr-8 sm:m-0'>
              <p className='opacity-60 text-sm font-medium tracking-tight'>Writing</p>
              <div className='flex flex-col gap-6'>
                {featuredPosts?.map((post, index) => (
                  <div key={index} className='pr-4'>
                    <a
                      href={'/posts/' + post.metadata.slug}
                      className='underline decoration-from-font underline-offset-2 tracking-tight'>
                      {post.metadata.title}
                    </a>
                    <p className='mt-1 opacity-60 not-prose leading-snug text-sm'>
                      {post.metadata.description}
                    </p>
                  </div>
                ))}
                <Link href='/posts'>All posts -&gt;</Link>
              </div>
            </div>
          </div>

          <div className={`appear ${stagger(6)}`}>
            <strong>Now</strong>
            <p className='pb-6'>
              Figuring out how to be the best in the room, trying to improve by iterating and
              perfecting my craft every day—all while keeping in mind the highest quality of work.
            </p>
            <Venn />
            <p className='pt-6'>
              The culmination of these three skills is what I strive for in my work and, in my
              opinion, set me apart from the rest of the crowd.
            </p>
            <p>
              I am the product guy and I like to ship fast. I love solving problems and building
              things. I am obsessed with servers, design, performance, typography, and software that
              makes an impact. I learn new things every day to enable me to do what I do better. The
              web is a blank canvas I have only started to paint.
            </p>
            {/* <p className='underline decoration-from-font underline-offset-2'>I am looking for new opportunities!</p> */}
          </div>

          <div className={`appear ${stagger(7)}`}>
            <strong>Connect</strong>
            <p>
              Find me on these sites:{' '}
              <a title='@mayurbhoii' href='https://twitter.com/mayurbhoii'>
                Twitter
              </a>
              ,{' '}
              <a title='Mayur Bhoi on LinkedIn' href='https://linked.com/in/mayur-bhoi'>
                LinkedIn
              </a>
              ,{' '}
              <a title='mayur57' href='https://github.com/mayur57'>
                GitHub
              </a>,{" "}
              <a title="Mayur Bhoi on Peerlist" href="https://peerlist.io/mayurbhoi">
                Peerlist
              </a>
            </p>
            <div className='mt-4'>
              Reach out at{' '}
              <a title='me@mayurbhoi.com' href='mailto:me@mayurbhoi.com'>
                me@mayurbhoi.com
              </a>
              <LocalTime />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
