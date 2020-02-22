import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='background'>
      <header className='header'>
        {/* <div className='header__logo-box'>
         DO
        </div> */}
        <div className='header__text-box'>
          <h1 className='heading__primary'>
            <span className='heading__primary-main'> Dog Out</span>
            <span className='heading__primary-sub'>outside</span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
