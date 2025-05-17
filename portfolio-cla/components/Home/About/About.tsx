import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { aboutInfo } from '../../../Data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
    <SectionHeading>About Me</SectionHeading>
    <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        {/* text content */}
        <div>
            <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
                {aboutInfo.title}
            </h1>

            <div className='mt-6 space-y-4'>
                {aboutInfo.description.map((paragraph, index) => (
                <p key={index} className='text-base text-gray-400 leading-relaxed'>
                    {paragraph}
                </p>
                ))}
            </div>

            {/* Check Card 1 */}
            <div className='mt-8'>
                {/* whats being checked */}
                <div className='flex items-center space-x-2 mb-6'>
                    {/* Check Mark */}
                    <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white' />
                    </div>

                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                        Frontend Development
                    </p>
                </div>

                {/* Check  Card 2 */}
                <div className='flex items-center space-x-2 mb-6'>
                    {/* Check Mark */}
                    <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white' />
                    </div>

                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                        Backend Development
                    </p>
                </div>

                {/* Check Card 3 */}
                <div className='flex items-center space-x-2 mb-6'>
                    {/* Check Mark */}
                    <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white' />
                    </div>

                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                        Full Stack Development
                    </p>
                </div>

                {/* Check  Card 4 */}
                <div className='flex items-center space-x-2 mb-6'>
                    {/* Check Mark */}
                    <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white' />
                    </div>

                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                        Product Manager
                    </p>
                </div>

                {/* Check  Card 5 */}
                <div className='flex items-center space-x-2 mb-6'>
                    {/* Check Mark */}
                    <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white' />
                    </div>

                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                        SCRUM Master
                    </p>
                </div>
           
            </div>


        </div>

        {/* stats  content */}
        <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>

            {/* Stats 1 */}
            <div>
                <Image 
                src="/images/customer.png"
                alt="image"
                width={80}
                height={80}
                className='mx-auto'
                />
                <p className='mt-3 font-bold text-xl text-white  text-center'>{aboutInfo.client}</p>
                <p className='text-base sm:text-lg text-gray-400'>Satisfied Customers</p>
            </div>

            {/* Stats 2 */}
            <div>
                <Image 
                src="/images/experience.png"
                alt="image"
                width={80}
                height={80}
                className='mx-auto'
                />
                <p className='mt-3 font-bold text-xl text-white  text-center'>{aboutInfo.experience}</p>
                <p className='text-base sm:text-lg text-gray-400 text-center'>Years</p>
            </div>

            {/* Stats 3 */}
            <div>
                <Image 
                src="/images/completed.png"
                alt="image"
                width={80}
                height={80}
                className='mx-auto'
                />
                <p className='mt-3 font-bold text-xl text-white  text-center'>{aboutInfo.project}</p>
                <p className='text-base sm:text-lg text-gray-400'>Completed Projects</p>
            </div>

            {/* Stats 4 */}
            <div>
                <Image 
                src="/images/rocket.png"
                alt="image"
                width={80}
                height={80}
                className='mx-auto'
                />
                <p className='mt-3 font-bold text-xl text-white  text-center'>{aboutInfo.website}</p>
                <p className='text-base sm:text-lg text-gray-400'>Websites Deployed</p>
            </div>

        </div>
    </div>

    </div>
  )
}

export default About