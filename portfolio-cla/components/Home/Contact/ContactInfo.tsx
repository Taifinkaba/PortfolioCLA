import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMap } from 'react-icons/fa'
import { contactData } from '../../../Data/data'

const ContactInfo = () => {
  return (
    <div>

        {/* LinkedIn Div */}
        <div className='flex items-center  space-x-8  mt-8  mb-8'>
            {/* icon */}
            <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center  justify-center flex-col'>
                <FaLinkedin className='w-4 h-4 md:w-7 md:h-7 text-white' />
            </div>
         
            {/* text LinkedIn*/}
            <div>
                <h1 className='text-lg sm:text-xl text-white font-bold'>
                    LinkedIn
                </h1>
                <h1 className='text-base sm:text-lg text-white text-opacity-70'>
                    <a
                    href={contactData.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                    >
                        Tai
                    </a>
                </h1>
            </div>

        </div>

        {/* Github Div */}
        <div className='flex items-center  space-x-8  mt-8  mb-8'>
            {/* icon */}
            <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center  justify-center flex-col'>
                <FaGithub className='w-4 h-4 md:w-7 md:h-7 text-white' />
            </div>
         
            {/* text Github*/}
            <div>
                <h1 className='text-lg sm:text-xl text-white font-bold'>
                    Github
                </h1>
                <h1 className='text-base sm:text-lg text-white text-opacity-70'>
                    <a
                    href={contactData.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                    >
                        Tai
                    </a>
                </h1>
            </div>

        </div>

         {/* Email Div */}
         <div className='flex items-center  space-x-8  mt-8  mb-8'>
            {/* icon */}
            <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center  justify-center flex-col'>
                <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white' />
            </div>
         
            {/* text Email*/}
            <div>
                <h1 className='text-lg sm:text-xl text-white font-bold'>
                    Email
                </h1>
                <h1 className='text-base sm:text-lg text-white text-opacity-70'>
                    <a
                    href={`mailto:${contactData.email}`}
                    className='hover:underline'
                    >
                    {contactData.email}
                    </a>
                </h1>
            </div>

        </div>

         {/* Location Div */}
         <div className='flex items-center  space-x-8'>
            {/* icon */}
            <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center  justify-center flex-col'>
                <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white' />
            </div>

            {/* text Location*/}
            <div>
                <h1 className='text-lg sm:text-xl text-white font-bold'>
                    Location
                </h1>
                <h1 className='text-base sm:text-lg text-white text-opacity-70'>
                    {contactData.address}
                </h1>
            </div>

        </div>

    </div>
  )
}

export default ContactInfo