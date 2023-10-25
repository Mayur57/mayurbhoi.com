import Image from 'next/image'
import { allProjects, Project } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () =>
  allProjects.map((project: Project) => ({
    slug: project.slug,
  }))

export const generateMetadata = ({ params }: { params: Project }) => {
  const project = allProjects.find((project: Project) => project.slug === params.slug)
  if (!project) throw new Error(`project not found for slug: ${params.slug}`)
  return { title: project.title }
}

export default function ExpandedProject({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project: Project) => project.slug === params.slug)
  if (!project) throw new Error(`project not found for slug: ${params.slug}`)
  const MDX = useMDXComponent(project.body.code)
  return (
    <article className='mx-auto pb-[7rem] max-w-xl prose prose-sm sm:prose dark:prose-invert pt-8 sm:pt-[7rem] px-6 xs:px-0 prose-h1:m-0'>
      <div className='flex gap-4 items-center'>
        <div className='relative h-[36px] w-[36px] min-w-[36px] not-prose aspect-square rounded-lg overflow-clip border border-[#E2E2E2] dark:border-[#E2E2E212]'>
          <Image src={project.thumbnail} alt={project.title} fill />
        </div>
        <h1 className='tracking-tight'>{project.title}</h1>
      </div>
      <MDX />
    </article>
  )
}
