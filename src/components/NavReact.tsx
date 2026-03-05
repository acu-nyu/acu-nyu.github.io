import React from 'react';

interface Props {
  onMenuToggle?: () => void;
}

export default function Nav({ onMenuToggle = () => {} }: Props) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <a
              onClick={() => {
                onMenuToggle();
              }}
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                onMenuToggle();
              }}
              href="/Team"
            >
              Team
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                onMenuToggle();
              }}
              href="/Alumni"
            >
              Alumni
            </a>
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
                borderRadius: '9999px',
                padding: '0 2.5rem',
                height: '3rem',
                lineHeight: '3rem',
                display: 'inline-block',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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
