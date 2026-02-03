import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/Team"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/Alumni"
            >
              Alumni
            </Link>
          </li>
          <li>
            <a
              href="http://eepurl.com/bc5n6r"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                onMenuToggle();
              }}
              className="button special shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                marginTop: '1rem',
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                color: '#dc2626',
                borderRadius: '9999px', // Pill shape
                padding: '0 2.5rem',
                height: '3rem',
                lineHeight: '3rem',
                display: 'inline-block',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              Join Us
            </a>
          </li>

        </ul>
        <a
          className="close"
          onClick={(e) => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
