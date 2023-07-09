import React from 'react';
import Navbar from '../../components/homepage-components/navbar/Navbar';
import Header from '../../components/homepage-components/header/Header';
import About from '../../components/homepage-components/about/About'
import Skills from '../../components/homepage-components/skills/Skills'
import Project from '../../components/homepage-components/projects/Project';


const HomePage = () => {
  return (
    <div className='home'> 
        <Navbar />
        <Header />
        <About />
        <Skills />
        < Project />
    </div>
  )
}

export default HomePage