import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const EventCard = ({ image, title, description }) => {
  return (
    <div
      className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      style={{
        borderRadius: '0.75rem',
        width: '300px',
        height: '400px',
      }}
    >
      {image && image.images ? (
        <GatsbyImage
          image={image}
          alt={title}
          className="absolute inset-0 w-full h-full"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          imgStyle={{ objectFit: 'cover' }}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
      {/* Gradient overlay from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
        }}
      />
      {/* Text content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
        <h3
          className="text-lg font-bold mb-1 mt-0 leading-tight"
          style={{ color: '#ffffff' }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-sm leading-relaxed m-0 opacity-90"
            style={{
              color: 'rgba(255,255,255,0.9)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventCard;
