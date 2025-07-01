import React from 'react';
import Logo from '../../assets/logo.png'; // Update this path based on your structure

const Header: React.FC = React.memo(() => {
  return (
    <header className="container flex items-center justify-between w-full py-4" role="banner">
      <h1
        className="text-5xl tracking-wide text-white select-none"
        tabIndex={0}
        aria-label="Jason Witt Portfolio"
        aria-level={1}
        role="heading"
      >
        Jason Witt
      </h1>
      <img
        src={Logo}
        alt="Jason Witt personal logo"
        className="w-12 h-12"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        draggable="false"
        width={48}
        height={48}
      />
    </header>
  );
});

export default Header;
