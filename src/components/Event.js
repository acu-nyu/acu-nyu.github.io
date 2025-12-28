import React from 'react';
/* this is a test */
const Event = ({ image, title, description }) => {
  return (
    <article>
      <div className="image flip-container">
        <div className="flipper">
          <div className="front">
            <img src={image} alt={title} />
          </div>
          <div className="back">
            <div className="back-content">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="major">{title}</h3>
    </article>
  );
};

export default Event;
