import React, { useRef } from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function Carousel({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="carousel-container"
      style={{ position: 'relative', width: '100%' }}
    >
      <button
        onClick={() => scroll('left')}
        style={{
          position: 'absolute',
          left: '-3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '2rem',
          padding: '1rem',
          height: 'auto',
          lineHeight: '1',
          minWidth: 'auto',
        }}
        aria-label="Scroll Left"
      >
        <i className="fa fa-chevron-left" />
      </button>

      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '2rem',
          padding: '1rem 0',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        {React.Children.map(children, (child) => (
          <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>{child}</div>
        ))}
      </div>

      <style>{`
        .carousel-container div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <button
        onClick={() => scroll('right')}
        style={{
          position: 'absolute',
          right: '-3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '2rem',
          padding: '1rem',
          height: 'auto',
          lineHeight: '1',
          minWidth: 'auto',
        }}
        aria-label="Scroll Right"
      >
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  );
}
