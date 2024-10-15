import React from 'react';

const MemberModal = ({ isOpen, member, onClose }) => {
  if (!isOpen || !member) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/*<button className="modal-close" onClick={onClose}>X</button>*/}
        <img src={member.image} alt={member.name} className="modal-image" />
        <h2>{member.name}</h2>
        <p>{member.position}</p>
        <p>{member.description}</p>
      </div>
    </div>
  );
};

export default MemberModal;
