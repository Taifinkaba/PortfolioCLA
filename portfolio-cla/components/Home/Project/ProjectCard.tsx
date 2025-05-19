// ProjectCard.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'

type Props = {
  project: {
    id: number;
    name: string;
    image: string;
    github?: string;
    youtube?: string;
    live?: string;
    description: string;
  }
}

const ProjectCard = ({ project }: Props) => {
  const { name, image, github, youtube, live, description } = project;

  return (
    <div className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between h-full'>
      <div>
        {/* Project name centered */}
        <h3 className='text-white text-xl font-semibold text-center mb-4'>{name}</h3>

        <Image
          src={image}
          alt={`${name} project`}
          width={300}
          height={200}
          className='w-full rounded-md mb-4'
        />

        <p className='text-white text-sm mt-2'>{description}</p>
      </div>

      <div className='flex gap-4 mt-4'>
        {github && (
          <Link href={github} target='_blank' className='text-white hover:text-gray-300 text-xl'>
            <FaGithub />
          </Link>
        )}
        {youtube && (
          <Link href={youtube} target='_blank' className='text-white hover:text-gray-300 text-xl'>
            <FaYoutube />
          </Link>
        )}
        {live && (
          <Link href={live} target='_blank' className='text-white hover:text-gray-300 text-xl'>
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectCard;