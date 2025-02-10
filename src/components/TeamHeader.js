import React from 'react';
import '../assets/sass/components/module.headersection.scss'

const TeamHeader = () => {
  return (
    <section className="header-section">
      <div className="container">
        <h2 className="main-heading">Meet the E-Board</h2>
        {/* <h3 className="sub">Come see us at our next event!</h3> */}
        {/* <hr className="divider" /> */}
        <p className="sub-heading">
          <strong>Our Spring 2025 Eboard applications are closed right now. Check back next semester when applications go live!</strong>
          <br />
          <em>Freshmen and Sophomores only</em>
        </p>
        {/* <a href="https://bit.ly/acuspring25" className="apply-button" target="_blank" rel="noreferrer">
          Apply Now
        </a> */}
      </div>
    </section>
  );
};

export default TeamHeader;
