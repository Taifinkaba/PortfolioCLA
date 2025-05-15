import React from 'react'
import Image from 'next/image'
import { BaseInfo } from '../../../Data/data' // make sure the path is correct

const ContactForm = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='mx-auto hidden lg:block rounded-[3rem] border-[6px] border-blue-950 overflow-hidden'>
        <Image 
          src={BaseInfo.profilePic} 
          alt={BaseInfo.name} 
          width={450} 
          height={450} 
          className='rounded-[3rem]' 
        />
      </div>
    </div>
  )
}

export default ContactForm