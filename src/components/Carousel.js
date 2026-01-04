import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ children }) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  const innerRef = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current && innerRef.current) {
        setWidth(innerRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    // Initial update
    updateWidth();

    // Listen for window resize
    window.addEventListener('resize', updateWidth);

    // Observer for content changes (e.g. images loading)
    const observer = new ResizeObserver(updateWidth);
    if (innerRef.current) {
      observer.observe(innerRef.current);
    }

    // Checking periodically for a short time to catch image layout shifts if ResizeObserver misses it
    const timeout = setTimeout(updateWidth, 500);

    return () => {
      window.removeEventListener('resize', updateWidth);
      if (innerRef.current) observer.unobserve(innerRef.current);
      clearTimeout(timeout);
    };
  }, [children]);

  return (
    <motion.div 
      ref={carouselRef} 
      className="carousel" 
      whileTap={{ cursor: 'grabbing' }} 
      style={{ overflow: 'hidden', padding: '1rem 0' }} // added padding to prevent shadow clipping
    >
      <motion.div
        ref={innerRef}
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
