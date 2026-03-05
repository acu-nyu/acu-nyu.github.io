import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'astro:assets';

interface Props {
  image?: string | { images: any };
  title?: string;
  description?: string;
  delay?: number;
}

export default function Event({
  image,
  title = '',
  description = '',
  delay = 0,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay }}
      style={{ width: '100%', margin: 0 }}
    >
      <div className="image flip-container">
        <div className="flipper">
          <div className="front">
            {typeof image === 'string' ? (
              <img src={image} alt={title} />
            ) : image?.images ? (
              <img src={image.images.fallback?.src || image.src} alt={title} />
            ) : null}
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
}
