import React, { useState, useEffect } from 'react';
import MemberModal from './MemberModal';

{/* No dropdown for teams */}
/**
import React from 'react';

const TeamSection = ({ teamName, members }) => (
  <>
    <h2 className="section-header">{teamName}</h2>
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

export default TeamSection;
 */



const TeamSection = ({ teamName, teamDescription, members }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const [selectedMember, setSelectedMember] = useState(null); // Track the clicked member
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  const handleClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open'); 
    }
    return () => document.body.classList.remove('modal-open'); 
  }, [isModalOpen]);

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
          <article key={index} className="grid-item" onClick={() => handleClick(member)}>
            <img src={member.image} alt={member.name} />
            <h4 className="leader">{member.name}</h4>
            <p className="position">{member.position}</p>
          </article>
        ))}
      </section>

      <MemberModal
        isOpen={isModalOpen} 
        member={selectedMember} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default TeamSection;
