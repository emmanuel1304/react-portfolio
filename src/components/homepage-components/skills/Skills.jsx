import React from 'react'
import './skills.css'
import SkillCard from './skill-card/SkillCard'
import about from '../../../assets/about.jpg'
import django from '../../../assets/django-logo.png'
import react from '../../../assets/react-logo.png'
import api from '../../../assets/api-logo.jpeg'
import aws from '../../../assets/aws-logo.png'


const Skills = () => {
  return (
    <div className='skills' id='skills'> 
        <div className='skills-header'>
            <div className='line' />
            <h1>My Skills & Expertise</h1>
            <div className='line' />
        </div>    
        <div className='skills-body'> 
            <SkillCard image={django} title='Python Backend/Django Web Development' description='Django is a powerful web framework for building robust and scalable web applications. With Django, I can efficiently develop secure and maintainable web solutions, leveraging its built-in features such as ORM, authentication, and admin interface.' rating={5}/>
            <SkillCard image={react} title='Frontend Development/React Js' description='Django REST Framework is an extension of Django that simplifies the creation of APIs. With Django REST Framework, I can design and develop RESTful APIs quickly, enabling seamless communication between front-end and back-end systems.' rating={5}/>
            <SkillCard image={api} title='REST APIs/Django Rest Framework' description="React is a popular JavaScript library for building user interfaces. Using React, I can create dynamic and interactive web applications with reusable components. React's virtual DOM and component-based architecture make it efficient and highly scalable." rating={4}/>
            <SkillCard image={aws} title='Cloud Hosting/Amazon Web Services' description='AWS (Amazon Web Services) provides a reliable and scalable cloud infrastructure for hosting web applications. I have experience in deploying applications on AWS, leveraging services like EC2, S3, RDS, and Elastic Beanstalk to ensure high availability, security, and scalability.' rating={5}/>
        </div>
    </div>
  )
}

export default Skills