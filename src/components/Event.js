import React from 'react';
import { motion } from 'framer-motion';
import { GatsbyImage } from 'gatsby-plugin-image';

const Event = ({ image, title, description, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      style={{ width: '100%', margin: 0 }}
    >
      <div className="image flip-container">
        <div className="flipper">
          <div className="front">
            {image && image.images ? <GatsbyImage image={image} alt={title} style={{ height: '100%', width: '100%' }} /> : <img src={image} alt={title} />}
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
