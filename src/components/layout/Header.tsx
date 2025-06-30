import React from 'react';
import Logo from '../../assets/logo.png'; // Update this path based on your structure

const Header: React.FC = () => {
  return (
    <header className="container flex items-center justify-between w-full py-4">
      <h1 className="text-5xl tracking-wide text-white">Jason Witt</h1>
      <img
        src={Logo}
        alt="Jason Witt personal logo"
        className="w-12 h-12"
      />
    </header>
  );
};

export default Header;
