import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <>
      <h2 className='aboutTitle'>Meet the pack</h2>
      <ul className='AboutUl'>
        <article className='about'>
          <div className='img__container'>
            <img
              className='about__image'
              src='../assets/Isla3.png'
              alt='eve picture'
            />
          </div>
          <div className='about__info'>
            I am a software developer who is obessed with her dog in my free
            time, I find new ways to spoil her, or you can find me around a pool
            table.
            <h3 className='about__name'>Eve Stockstill</h3>
            <li className='Li'>https://github.com/evestockstill</li>
            <li className='Li'>https://www.linkedin.com/in/evestockstill/</li>
          </div>
        </article>
      </ul>
    </>
  );
};

export default AboutUs;
