import React from 'react';
import '../assets/sass/components/module.headersection.scss'

const TeamHeader = () => {
  return (
    <section className="header-section">
      <div className="container">
        <h2 className="main-heading">Meet the E-Board</h2>
        {/* <h3 className="sub">Come see us at our next event!</h3> */}
        {/* <hr className="divider" /> */}
        {/* <p className="sub-heading">
          <strong>Our Fall 2025 Eboard applications are now open to freshmen and sophomores! Applications are due by 9/20</strong>
          <br />
          <em>Freshmen, Sophomores, and Juniors only</em>
        </p>
        <a href="https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FhzXTBSJbDWwRmhwLA%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafe3jfxEzurSFIiOrYpDIJGl_k6ZIU7CI5tcrMTPydMOGBCW7H0vO29A5_ExA_aem_PCttHs8erbjdB7QLyPK3OA&e=AT0wqOUVR3HiNe2CmyBs2cZnbLsh3exkWgXE5NrxhMC8Pm2WtE8VwszwGBAMA5XT7UYKHGjtIOlw8_Y8_85tuefOYzWZBh0-QbnDaHDqfQ" className="apply-button" target="_blank" rel="noreferrer">
          Apply Now
        </a> */}
        <p className='sub-heading'>
          Eboard Applications are currently closed. Check back in Janurary/Feburar 2026 for Spring Eboard Applications!
        </p>
      </div>
    </section>
  );
};

export default TeamHeader;
