import React from 'react';
import './Home.scss';
// import Nav from '../nav/Nav';

const Header = () => {
  return (
    <div className='background'>
      <header className='header'>
        <div className='header__text-box'>
          <h1 className='heading__primary'>
            <span className='heading-primary__sub--main'>Pet Pals</span>
            {/* <span className='heading-primary__last'>Pals</span> */}
            <span className='heading-primary__sub'>lets go outside</span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
