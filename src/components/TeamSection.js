import React, { useState } from 'react';

const TeamSection = ({ teamName, teamDescription, members }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <>
      {/* Clickable header to toggle the team description */}
      <h2 className="section-header" onClick={toggleDescription} style={{ cursor: 'pointer' }}>
        {teamName} {isDescriptionOpen ? '▲' : '▼'} 
      </h2>

      {isDescriptionOpen && (
        <p className="team-description">
          {teamDescription}
        </p>
      )}

      {/* Team members are always visible */}
      <section className="grid-section">
        {members.map((member, index) => (
          <article key={index} className="grid-item">
            <img src={member.image} alt={member.name} />
            <h4 className="leader">{member.name}</h4>
            <p className="position">{member.position}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default TeamSection;
