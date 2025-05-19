import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { projectData } from '../../../Data/data'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>My Projects</SectionHeading>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch'>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Project