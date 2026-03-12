import React from 'react';
import { motion } from 'framer-motion';

interface EventProps {
  imageSrc?: string;
  title: string;
  description: string;
  delay?: number;
}

const Event: React.FC<EventProps> = ({
  imageSrc,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      style={{ width: '100%', margin: 0 }}
    >
      <div className="image flip-container">
        <div className="flipper">
          <div className="front">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  background: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                }}
              >
                No Image
              </div>
            )}
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
