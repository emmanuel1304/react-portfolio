import React from 'react'
import './skillcard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const SkillCard = ({image, title, description, rating}) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star" />);
    }
    return stars;
  };

  return (
    <div className='skillcard'> 
        <div className='skillcard-image'> 
            <img src={image} />
        </div>
        <div className="rating">
            <div className="stars">
              {renderStars()}
            </div>
        </div>
        <div className='skillcard-text'> 
            <h2>{title}</h2>
            <p>{description}</p> 
        </div>
        
    </div>
  )
}

export default SkillCard