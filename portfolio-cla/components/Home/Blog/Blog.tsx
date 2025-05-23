import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { blogs } from '../../../Data/data'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>Blogs</SectionHeading>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-stretch'>
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className='h-full'> {/* Make this wrapper full height */}
              <BlogCard blog={blog} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog