import React from 'react'
import './header.css'
import code2 from '../../../assets/code2.jpg';



const Header = () => {
  return (
    <div className='header'> 
        <div className='header-text'>
            <h1>Embark on a Journey Through the Full Stack Landscape: Where I Build Bridges Between Design and Functionality</h1> 
            <h3> 
              Discover the Limitless Power of Full Stack Programming, Where Design Meets Development, and Ideas are Transformed into Seamless Digital Experiences. Every Line of Code Tells a Story, Every Solution is a Masterpiece, and Your Creativity Knows No Bounds.
            </h3>
            <div className='input-container'>
                <input type='text' placeholder='Your Message'/><button>Send Message</button>
            </div>
        </div>
        <div className='header-image'> 
            <img src={code2} />
        </div>
    </div>
  )
}

export default Header