import { Metadata } from 'next'
import { allProjects, Project } from 'contentlayer/generated'
import MainLayout from 'src/components/main-layout'
import Title from 'src/components/title'

import ProjectTile from './project-tile'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <MainLayout>
      <Title>projects</Title>
      <div className='pt-8'>
        {allProjects.map((project: Project, idx) => (
          <ProjectTile key={idx} project={project} index={idx} />
        ))}
      </div>
    </MainLayout>
  )
}
