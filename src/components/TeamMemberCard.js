import React, { useState } from 'react';
import { Card } from './ui/card';

const TeamMemberCard = ({ name, role, photo, description, isAlumni = false }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleInteraction = () => {
        if (!isAlumni) {
            setShowDescription(!showDescription);
        }
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
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Description Overlay - Visible on Hover OR Click */}
                {!isAlumni && (
                    <div className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 bg-black/80 backdrop-blur-[2px] text-white text-center ${showDescription ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                        <p className="text-sm font-light leading-relaxed tracking-wide">
                            {description}
                        </p>
                    </div>
                )}

                {/* Name and Role - Center Aligned */}
                {/* We use opacity to hide this block when the description is shown (hover or click) to avoid overlap */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 text-center transition-all duration-300 transform ${(!isAlumni) ? 'group-hover:opacity-0 group-hover:translate-y-4' : ''
                    } ${showDescription ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <h3 className="font-bold text-xl text-white tracking-tight mb-2 drop-shadow-md">
                        {name}
                    </h3>
                    {role && (
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 shadow-sm">
                            <p className="text-xs font-medium text-white/90 uppercase tracking-wider translate-y-[1px]">
                                {role}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default TeamMemberCard;
