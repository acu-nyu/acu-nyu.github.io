import React, { useState } from 'react';
import { Card } from './ui/card';

const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="fill-current"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const TeamMemberCard = ({ name, role, photo, description, isAlumni = false, linkedinUrl }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleInteraction = () => {
        if (!isAlumni) {
            setShowDescription(!showDescription);
        }
    };

    const handleLinkedInClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Card
            className="overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 shadow-lg group relative w-full h-full transition-all duration-300 hover:shadow-xl hover:border-white/20 cursor-pointer"
            onClick={handleInteraction}
        >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                    src={photo}
                    alt={name}
                    className={`h-full w-full object-cover transition-transform duration-500 will-change-transform ${!isAlumni ? 'group-hover:scale-105' : ''
                        }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

                {!isAlumni && (
                    <div className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 bg-black/80 backdrop-blur-[2px] text-white text-center ${showDescription ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                        <p className="text-sm font-light leading-relaxed tracking-wide m-0">
                            {description}
                        </p>
                    </div>
                )}

                <div className={`absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-end transition-all duration-300 transform ${(!isAlumni) ? 'group-hover:opacity-0 group-hover:translate-y-4' : ''
                    } ${showDescription ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

                    <h3 className="w-full text-center font-bold text-xl text-white tracking-tight mb-2 mt-0 drop-shadow-md">
                        {name}
                    </h3>

                    <div className="flex flex-col items-center gap-2 w-full">
                        {role && (
                            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 shadow-sm">
                                <p className="m-0 p-0 text-xs font-medium text-white/90 uppercase tracking-wider leading-none">
                                    {role}
                                </p>
                            </div>
                        )}

                        {linkedinUrl && (
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-white/70 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                                onClick={handleLinkedInClick}
                                aria-label={`${name}'s LinkedIn`}
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default TeamMemberCard;
