import React from 'react'
import Image from 'next/image';

// Props
type Props ={
    blog: {
        id: number;
        title: string;
        summary: string;
        date: string;
        image: string;
    }
}

const BlogCard = ({blog}: Props) => {
    const {date, image, summary, title} = blog;

  return (
    // card
    <div className='bg-indigo-950 rounded-md overflow-hidden'>
        {/* image */}
        <Image 
        src={image} 
        alt={title}
        width={300}
        height={300}
        className='w-full h-[250px] object-cover' 
        />

        {/* text */}
        <div className='p-6'>
            <p className='rounded-sm px-6 py-1.5 bg-rose-400 text-white w-fit'>
                News
            </p>

            {/* title */}
            <h1 className='sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200  mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold'>
                {title}
            </h1>

            {/* summary */}
            <p className='text-sm font-semibold text-opacity-70 text-gray-400'>
                {summary}
            </p>

            {/* line */}
            <div className='mt-4 mb-4 w-full h-[1.5px] bg-gray-300 opacity-45'></div>

            {/* read more */}
            <div className='flex items-center justify-between'>

                <h1 className='text-sm text-gray-300 font-bold'>{date}</h1>
                <button className='text-base hover:text-rose-500 text-gray-200 underline font-bold'>
                    Read More
                </button>

            </div>

        </div>

    </div>
  )
}

export default BlogCard