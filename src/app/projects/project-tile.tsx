'use client'

import { Project } from 'contentlayer/generated'
import { motion } from 'framer-motion'
import { staggerRank } from 'src/utils/functions'

const ProjectTile = ({ project, index }: { project: Project; index: number }) => {
  let indColor = ''
  let title = ''
  switch (project.status.toLowerCase().trim()) {
    case 'archived':
      indColor = ' bg-yellow-500 dark:bg-yellow-400'
      title = 'Project is archived for reference'
      break
    case 'eol':
      indColor = ' bg-red-400 dark:bg-red-400'
      title = 'Project is inactive'
      break
    default:
      indColor = ' bg-green-500 dark:bg-green-300'
      title = 'Project is actively maintained'
      break
  }
  return (
    <motion.div
      {...staggerRank(index + 1)}
      className='px-5 py-5 mb-4 rounded-2xl bg-white dark:bg-[#161616] dark:hover:bg-[#232323] hover:bg-[#EAEAEA] cursor-ne-resize'>
      <div className='text-ellipsis'>
        <div className='flex flex-row justify-between'>
          <p className='font-medium text-md'>{project.title}</p>
          <div title={title} className={`h-2 w-2 rounded-full ${indColor}`} />
        </div>
        <p className='opacity-60 text-sm pt-2'>{project.description}</p>
        <p className='opacity-40 text-xs pt-2 font-mono'>Flutter</p>
      </div>
    </motion.div>
  )
}

export default ProjectTile
