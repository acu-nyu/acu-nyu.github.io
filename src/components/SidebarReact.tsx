import React, { useState } from 'react';
import NavReact from './NavReact.tsx';

interface Props {
  fullMenu?: boolean;
}

export default function SidebarReact({ fullMenu = false }: Props) {
  const [headerOpen, setHeaderOpen] = useState(false);

  return (
    <>
      <header id="header" className={fullMenu ? '' : 'alt'}>
        <h1>
          <a href="/">Asian Cultural Union at NYU</a>
        </h1>

        <nav>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              setHeaderOpen(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <NavReact onMenuToggle={() => setHeaderOpen(!headerOpen)} />
      </div>
    </>
  );
}
