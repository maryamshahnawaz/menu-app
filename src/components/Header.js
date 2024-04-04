import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Login from './Login';

const Header = () => {
  return (
    <div className='flex justify-between bg-slate-100'>
      <Logo />
      <Nav />
      <Login />
    </div>
  );
};

export default Header;
