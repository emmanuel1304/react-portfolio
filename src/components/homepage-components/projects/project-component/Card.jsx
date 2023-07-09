import React, { useState } from 'react';
import './card.css'



const MyComponent = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className='project-card'>
      <h2>{data?.title}</h2>
      <img src={`http://localhost:8000/${data?.image4}`} alt="Image" />

      <button onClick={handleModalOpen}>View Details</button>

      {showModal && (
        <div className="modal">
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <div className="image-gallery">
            {Object.keys(data).map((key) => {
              if (key.startsWith('image')) {
                return (
                  <img
                    key={key}
                    src={`http://localhost:8000/${data[key]}`}
                    alt="Image"
                  />
                );
              }
              return null;
            })}
          </div>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
