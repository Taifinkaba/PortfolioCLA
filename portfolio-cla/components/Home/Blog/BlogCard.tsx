import React from 'react'
import Image from 'next/image';

// Props
type Props = {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
    url: string;
  }
}

const BlogCard = ({ blog }: Props) => {
  const { date, image, summary, title, url } = blog;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:scale-[1.01] transition-transform duration-200 h-full"
    >
      {/* ✅ Flex column and full height card */}
      <div className="bg-indigo-950 rounded-md overflow-hidden h-full flex flex-col">
        
        {/* image */}
        <Image 
          src={image} 
          alt={title}
          width={300}
          height={300}
          className="w-full h-[250px] object-cover" 
        />

        {/* text */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="rounded-sm px-6 py-1.5 bg-rose-400 text-white w-fit">
            News
          </p>

          {/* title */}
          <h1 className="sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold">
            {title}
          </h1>

          {/* summary */}
          <p className="text-sm font-semibold text-opacity-70 text-gray-400 mb-6">
            {summary}
          </p>

          {/* ✅ Push divider to bottom */}
          <div className="mt-auto mb-4 w-full h-[1.5px] bg-gray-300 opacity-45"></div>

          {/* date */}
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-gray-300 font-bold">{date}</h1>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogCard