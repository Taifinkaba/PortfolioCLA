import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      {/* Section Title */}
      <SectionHeading>Contact</SectionHeading>

      {/* Content Grid */}
      <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-20'>
        {/* Contact form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className='xl:mx-auto'>
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

export default Contact