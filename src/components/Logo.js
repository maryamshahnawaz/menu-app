import React from 'react';
import { logo_image } from '../utils/Constants';

const Logo = () => {
  return (
    <div className='w-28'>
      <img className='w-20' src={logo_image} alt='app logo' />
    </div>
  );
};

export default Logo;
