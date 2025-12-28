import React from 'react';
import { Card, CardContent } from './ui/card';

const TeamMemberCard = ({ name, role, photo, description, isAlumni = false }) => {
    return (
        <Card className="overflow-hidden bg-card border-none shadow-none group relative w-full h-full">
            <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <img
                    src={photo}
                    alt={name}
                    className={`h-full w-full object-cover transition-all duration-300 ${!isAlumni ? 'group-hover:scale-105 group-hover:opacity-30' : ''
                        }`}
                />
                {!isAlumni && (
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/60 text-white text-center rounded-md">
                        <p className="text-sm">{description}</p>
                    </div>
                )}
            </div>
            <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-lg">{name}</h3>
                {role && <p className="text-sm text-muted-foreground">{role}</p>}
            </CardContent>
        </Card>
    );
};

export default TeamMemberCard;
