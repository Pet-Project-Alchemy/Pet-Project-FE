import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
          onClick={() => setOpen(!open)}
        />
        <label htmlFor='navi-toggle' className={`navigation__button ${open ? 'navigation__button-open' : 'navigation__button'}`}>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className={`navigation__background ${open ? 'navigation__background-open' : 'navigation__background'}`}>&nbsp;</div>
        <nav className={`navigation__nav ${open ? 'navigation__nav-open' : 'navigation__nav-close'}`}>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <NavLink to='/explore' className='navigation__link' onClick={() => setOpen(!open)}>
                Explore
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/signup' className='navigation__link' onClick={() => setOpen(!open)}>
                Sign Up
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/login' className='navigation__link' onClick={() => setOpen(!open)}>
                Login
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link' onClick={() => setOpen(!open)}>
               Profile
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/zipcode/:zipcode' className='navigation__link' onClick={() => setOpen(!open)}>
                Search
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link' onClick={() => setOpen(!open)}>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;

