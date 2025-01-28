import React from 'react';
import config from '../../config';
import '../assets/sass/components/module.headersection.scss'
import '../assets/sass/components/module.teamheader.scss'

const TeamHeader = () => {
  return (
    <section className="header-section">
      <div className="container">
        <h2 className="main-heading">Meet the E-Board</h2>
        {/* <h3 className="sub">Come see us at our next event!</h3> */}
        {/* <hr className="divider" /> */}
        <p className="sub-heading">
          <strong>Our Spring 2025 Eboard applications are now open till February 8th!</strong>
          <br />
          <em>Freshmen and Sophomores only</em>
        </p>
        <a href="https://bit.ly/acuspring25" className="apply-button" target="_blank">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default TeamHeader;
