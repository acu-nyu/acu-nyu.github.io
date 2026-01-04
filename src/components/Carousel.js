import React, { useRef } from 'react';

const Carousel = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Width of one card
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="carousel-container" style={{ position: 'relative', width: '100%' }}>
      {/* Scroll Left Button */}
      <button 
        onClick={() => scroll('left')} 
        style={{
          position: 'absolute',
          left: '-3rem', // moved further left to avoid overlapping content
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          boxShadow: 'none', // Override global button shadow
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '2rem',
          padding: '1rem',
          height: 'auto', // Override global button height
          lineHeight: '1', // Override global button line-height
          minWidth: 'auto', // Override any min-width
        }}
        aria-label="Scroll Left"
      >
        <i className="fa fa-chevron-left" />
      </button>

      {/* Scroll Container */}
      <div 
        ref={scrollRef} 
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '2rem',
          padding: '1rem 0',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
      >
        {React.Children.map(children, child => (
          <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
            {child}
          </div>
        ))}
      </div>
      
      {/* Hide Scrollbar for Chrome/Safari */}
      <style>{`
        .carousel-container div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Scroll Right Button */}
      <button 
        onClick={() => scroll('right')} 
        style={{
          position: 'absolute',
          right: '-3rem', // moved further right
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          boxShadow: 'none', // Override global button shadow
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '2rem',
          padding: '1rem',
          height: 'auto', // Override global button height
          lineHeight: '1', // Override global button line-height
          minWidth: 'auto', // Override any min-width
        }}
        aria-label="Scroll Right"
      >
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;
