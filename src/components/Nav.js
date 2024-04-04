import React from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';

const Nav = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className='flex'>
      <ul className='flex'>
        <li className='m-4 p-4'>online Status {onlineStatus ? '🟢' : '🔴'}</li>
        <li className='m-4 p-4'>
          <Link to='/'>Home</Link>
        </li>
        <li className='m-4 p-4'>
          <Link to='/about'>About Us</Link>
        </li>
        <li className='m-4 p-4'>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li className='m-4 p-4'>
          <Link to='/cart'>Cart</Link>
        </li>
        <li className='m-4 p-4'>
          <Link to='/grocery'>Grocery</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
