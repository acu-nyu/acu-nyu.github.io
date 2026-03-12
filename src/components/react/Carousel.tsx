import React, { useRef } from 'react';
import Event from './Event';

interface EventData {
  imageSrc?: string;
  title: string;
  description: string;
}

interface CarouselProps {
  events: EventData[];
}

const Carousel: React.FC<CarouselProps> = ({ events }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
        {events.map((event, index) => (
          <div key={index} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
            <div
              className="features"
              style={{
                minWidth: '350px',
                maxWidth: '350px',
                margin: 0,
                display: 'block',
              }}
            >
              <Event
                imageSrc={event.imageSrc}
                title={event.title}
                description={event.description}
              />
            </div>
          </div>
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
};

export default Carousel;
