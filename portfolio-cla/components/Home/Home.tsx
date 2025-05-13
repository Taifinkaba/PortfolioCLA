import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <section id="Hero">
      <Hero />
      </section>

      <section id="About">
      <About />
      </section>

      <section id="Services">
      <Services />
      </section>

      <section id="Project">
      <Project />
      </section>

      <section id="Skills">
      <Skills />
      </section>

      <section id="Blog">
      <Blog />
      </section>
      <section id="Contact">
      <Contact />
      </section>
      
    </div>
  )
}

export default Home;