'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '../../../constant/constant'

const Navbar = () => {
  // color scheme changes on scroll
  const [navBg, setNavBg]= useState(false);

  useEffect(()=>{
    const handler = () => {
      if(window.scrollY >= 90){
        setNavBg(true);
      }
      if(window.scrollY < 90){
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler)
    };

  }, [])



  return (
    <div 
    className={`fixed 
  ${navBg ? "bg-[#240b39]" : "bg-blue-950"} 
  h-[12vh] z-[10] w-full transition-all duration-200`}
    
    >
        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <Link href='#Home'>
              <Image 
              src="/images/PortfolioLogo.png" 
              alt="LOGO" 
              width={90} 
              height={90}
              className='rounded-full ml-[-1.5rem] sm:ml-0' 
              />
            </Link>


            {/* Navbar Links */}
            <div className='flex items-center space-x-10'>
              <div className='hidden lg:flex items-center space-x-8'>

              {navLinks.map((navlink)=> {
                return <Link key={navlink.id} href={navlink.url}>
                  <p className='nav__link'>{navlink.label}</p>
                </Link>
              })
              }
              </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar;