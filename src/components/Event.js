import React from 'react';

const Event = ({ image, title, description }) => {
  return (
    <article>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <h3 className="major">{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Event;
