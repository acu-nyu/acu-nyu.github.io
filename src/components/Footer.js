import React from 'react';
// import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p style={{textAlign: 'center'}}>Feel free to reach out to us on any of our socials!</p>
        <ul className="icons" style={{ textAlign: 'center' }}>
          <li>
            <a
              className="icon fa-instagram"
              href="https://instagram.com/nyu_acu"
              alt="Instagram"
            ></a>
          </li>

          <li>
            <a
              className="icon fa-facebook"
              href="https://www.facebook.com/nyu.acu/"
              alt="Facebook"
            ></a>
          </li>

          <li>
            <a
              className="icon fa-github"
              href="https://github.com/acu-nyu/"
              alt="GitHub"
            ></a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
