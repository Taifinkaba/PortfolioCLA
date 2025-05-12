import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Blog />
    </div>
  )
}

export default Home;