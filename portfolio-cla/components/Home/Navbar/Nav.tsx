import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <Image src="/images/HeadshotZoomIn.png" alt="LOGO" width={100} height={100} className='m1-[-1.5rem] sm:m1-0' />

            {/* Navbar Links */}
            <div className='flex items-center space-x-10'>

            </div>




        </div>


    </div>
  )
}

export default Navbar;