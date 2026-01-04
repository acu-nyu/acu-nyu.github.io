import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ children }) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div ref={carouselRef} className="carousel" whileTap={{ cursor: 'grabbing' }} style={{ overflow: 'hidden' }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
        style={{ display: 'flex', gap: '2rem' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
