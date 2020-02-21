import React from 'react';
import styles from './Header.scss';
import logo from '../assets/dogLogo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_box}>
        <img className={styles.header__logo} src={logo} alt='dog-log' />
      </div>
      <div className={styles.header__text_box}>
        <h1 className={styles.heading__primary}>
          <span className={styles.heading__primary_main}> Dog Out</span>
          <span className={styles.heading__primary_sub}>outside</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
