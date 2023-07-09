import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='navbar'> 
        <div className='main'>
            <div className='logo-container'>
                <h1>LUCKY'S PORTFOLIO</h1>
            </div>
            <div className='buttons-container'>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={40} color='black'/>
                </a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={40} color='black'/>
                </a>
            </div>
        </div>    
        <div className='line' />
        <div className='links'> 
            <div className='menu-button'> 
                {menu ? (
                  <FiX color='black' onClick={() => setMenu(false)} />
                ) : (
                  <FiMenu color='black' onClick={() => setMenu(true)} />
                )}
            </div>
            <div className='links-container'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#about'>About </a></p>
                <p><a href='#skills'>Skills</a></p>
                <p><a href='#projects'>Projects</a></p>
                <p><a href='#contact'>Contact</a></p>
            </div>  
        </div>
        {menu &&( 
                <div className='menu-container'> 
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#about'>About </a></p>
                    <p><a href='#skills'>Skills</a></p>
                    <p><a href='#projects'>Projects</a></p>
                    <p><a href='#contact'>Contact</a></p>
                </div>
            )}  
        
    </div>
  )
}

export default Navbar