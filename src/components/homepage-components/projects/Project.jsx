import React, { useEffect, useState } from 'react';
import './project.css'
import MyComponent from './project-component/Card';


const Project = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/projects/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div className='project'>
        <h1>My Projects</h1>
        <div className='main-container'>
            {data.map((item) => (
              <MyComponent key={item.id} data={item} />
            ))}
        </div>
      </div>  
    );
}

export default Project