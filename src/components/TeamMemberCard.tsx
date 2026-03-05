import React, { useState } from 'react';

interface Props {
  name?: string;
  role?: string;
  image?: string | { images: any };
  description?: string;
  isAlumni?: boolean;
  linkedinUrl?: string;
}

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="fill-current"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function TeamMemberCard({
  name = '',
  role = '',
  image,
  description = '',
  isAlumni = false,
  linkedinUrl = '',
}: Props) {
  const [showDescription, setShowDescription] = useState(false);

  const handleInteraction = () => {
    if (!isAlumni) {
      setShowDescription(!showDescription);
    }
  };

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const getImageSrc = () => {
    if (typeof image === 'string') {
      return image;
    }
    if (image?.images?.fallback?.src) {
      return image.images.fallback.src;
    }
    if (image?.src) {
      return image.src;
    }
    return '';
  };

  return (
    <div
      className="card overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 shadow-lg group relative w-full h-full transition-all duration-300 hover:shadow-xl hover:border-white/20 cursor-pointer"
      onClick={handleInteraction}
      style={{
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        className="relative aspect-[3/4] w-full overflow-hidden"
        style={{
          aspectRatio: '3/4',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {getImageSrc() ? (
          <img
            src={getImageSrc()}
            alt={name}
            className={`h-full w-full object-cover transition-transform duration-500 will-change-transform ${
              !isAlumni ? 'group-hover:scale-105' : ''
            }`}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            className="h-full w-full bg-gray-800 flex items-center justify-center text-white/50"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            No Image
          </div>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />

        {!isAlumni && (
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 transition-opacity duration-300 bg-black/80 backdrop-blur-[2px] text-white text-center ${
              showDescription
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            }`}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(0.75rem, 1.5vw, 1.5rem)',
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(2px)',
              color: 'white',
              textAlign: 'center',
              transition: 'opacity 0.3s',
            }}
          >
            <p
              className="text-[10px] sm:text-sm font-light leading-snug sm:leading-relaxed tracking-wide m-0 mb-2 sm:mb-4 line-clamp-6 sm:line-clamp-none overflow-hidden"
              style={{
                margin: 0,
                marginBottom: 'clamp(0.5rem, 1vw, 1rem)',
                fontSize: 'clamp(10px, 1.5vw, 14px)',
                lineHeight: '1.5',
                overflow: 'hidden',
              }}
            >
              {description}
            </p>
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                onClick={handleLinkedInClick}
                aria-label={`${name}'s LinkedIn`}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.3s',
                }}
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 flex flex-col items-center justify-end transition-all duration-300 transform ${
            !isAlumni ? 'group-hover:opacity-0 group-hover:translate-y-4' : ''
          } ${showDescription ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 'clamp(0.5rem, 1vw, 1rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            transition: 'all 0.3s',
            transform: showDescription ? 'translateY(1rem)' : 'translateY(0)',
            opacity: showDescription ? 0 : 1,
          }}
        >
          <h3
            className="w-full text-center font-bold text-sm sm:text-lg text-white tracking-tight mb-0.5 mt-0 drop-shadow-md"
            style={{
              width: '100%',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: 'white',
              margin: '0 0 0.125rem 0',
            }}
          >
            {name}
          </h3>

          <div
            className="flex flex-col items-center gap-1 sm:gap-1.5 w-full"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(0.25rem, 0.5vw, 0.375rem)',
              width: '100%',
            }}
          >
            {role && (
              <div
                className="inline-flex items-center justify-center px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 shadow-sm"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding:
                    'clamp(0.125rem, 0.25vw, 0.125rem) clamp(0.375rem, 0.5vw, 0.5rem)',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <p
                  className="m-0 p-0 text-[9px] sm:text-[11px] font-medium text-white/90 uppercase tracking-wider leading-none"
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: 'clamp(9px, 1.25vw, 11px)',
                    color: 'rgba(255,255,255,0.9)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                  }}
                >
                  {role}
                </p>
              </div>
            )}

            {linkedinUrl && isAlumni && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                onClick={handleLinkedInClick}
                aria-label={`${name}'s LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
