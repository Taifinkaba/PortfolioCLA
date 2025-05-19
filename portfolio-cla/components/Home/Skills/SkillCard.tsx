import React from 'react'
import  Image from 'next/image'

// props
type Props ={
    skill: {
        id: number;
        title: string;
        image: string;
    }
}

const SkillCard = ({skill}: Props) => {
    const {image, title} = skill;


  return (
    <div className='p-6 min-h-[220px] flex flex-col justify-center items-center hover:bg-blue-900 duration-300 transition-all text-center rounded-lg bg-gray-900'>
        <Image 
        src={image} 
        alt={title} 
        width={80}
        height={80}
        className='object-contain mx-auto h-20 w-20'
        />

        <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
    </div>
  )
}

export default SkillCard