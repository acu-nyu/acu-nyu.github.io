import React from 'react';
// import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <ul className="actions fit">
          <li>
            <a
              href="http://eepurl.com/bc5n6r"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Join our mailing list!
            </a>
          </li>
        </ul>
        <ul className="icons" style={{ textAlign: 'center' }}>
          <li>
            <a
              className="icon fa-instagram"
              href="https://instagram.com/nyu_acu"
              alt="Instagram"
              target="_blank"
              rel="noreferrer"
            > </a>
          </li>

          <li>
            <a
              className="icon fa-facebook"
              href="https://www.facebook.com/nyu.acu/"
              alt="Facebook"
              target="_blank"
              rel="noreferrer"
            > </a>
          </li>

          <li>
            <a
              className="icon fa-github"
              href="https://github.com/acu-nyu/"
              alt="GitHub"
              target="_blank"
              rel="noreferrer"
            > </a>
          </li>
        </ul>
        <p style={{ textAlign: 'center' }}>
          Feel free to reach out to us on any of our socials!
        </p>
        <ul className="copyright">
          <li>&copy; Asian Cultural Union at NYU. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
