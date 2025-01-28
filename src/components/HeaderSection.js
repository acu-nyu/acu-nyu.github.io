import React from 'react';
import config from '../../config';
import '../assets/sass/components/module.headersection.scss'

const HeaderSection = () => {
  return (
    <section className="header-section">
      <div className="container">
        <h1 className="main-heading">{config.heading}</h1>
        <h3 className="sub">{config.subHeading}</h3>
        <hr className="divider" />
        <p className="sub-heading">
          
          <br />
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

export default HeaderSection;
