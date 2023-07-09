import React from 'react'
import './about.css'
import about from '../../../assets/about.jpg'


const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-image'> 
            <img src={about} />
        </div> 
        <div className='about-text'> 
            <h1>Here's a briefing about me</h1>
            <h4> 
                Empowering Businesses through Technology: Welcome to my world! I'm Lucky Okirie Emmanuel,  
                a seasoned Full Stack Programmer hailing from Nigeria. With a strong foundation in Python, 
                Django, Django REST Framework, and React.js, I possess the skills and expertise to create dynamic 
                and scalable web applications. From crafting intuitive user interfaces to implementing robust backend systems, 
                I strive to deliver seamless digital solutions that drive business growth and enhance user experiences. With a keen 
                eye for detail and a passion for innovation, I bring ideas to life and transform them into captivating realities. 
                Let's embark on a collaborative journey and revolutionize the digital landscape together!
            </h4>
        </div>
    </div>
  )
}

export default About