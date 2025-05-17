import React from 'react'
import { BaseInfo } from '../../../Data/data'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
        <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* image */}
                <div className='mx-auto hidden lg:block rounded-[3rem] border-[6px] border-blue-950 overflow-hidden'>
                    <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={450} height={450}   className='rounded-[3rem]'  />
                </div>

                {/* text */}
                <div>
                    {/* sub heading */}
                    <h1 className='text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold'>
                        Hello, my name is {BaseInfo.name}
                    </h1>

                    {/* title */}
                    <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[6rem] text-white pb-2'>
                        {BaseInfo.position}
                    </h1>

                    {/* description */}
                    <div className='mt-6 text-sm md:text-base text-white text-opacity-60 space-y-4'>
                        {BaseInfo.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* button to resume*/}
                    <a 
                    href='https://docs.google.com/document/d/1QiuLNSztV99R0RQcMSB7BFVO4KJiAvO1UpaVmJ_WKns/edit?usp=sharing' 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'>
                            <span>Live CV</span>
                            <FaDownload />
                        </button>
                    </a>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero