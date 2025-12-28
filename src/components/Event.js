import React from 'react';
import { motion } from 'framer-motion';

const Event = ({ image, title, description, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
    >
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
    </motion.article>
  );
};

export default Event;
