import React from 'react';
import './Home.scss';
import mp4 from '../assets/dogPhoto/its-clark.mp4';
import webm from '../assets/dogPhoto/its-clark.webm';

const Header = () => {
  return (
    <>
      <div className='background'>
        <header className='header'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src={webm} type='video/webm' alt='dog park video' />
              <source src={mp4} type='video/mp4' alt='dog park video' />
              your browser not supported
            </video>
          </div>
          <div className='header__text-box'>
            <h1 className='heading__primary'>
              <span className='heading-primary__sub--main'>Pet Pals</span>
              <span className='heading-primary__sub'>Let's Go Outside</span>
            </h1>
          </div>
        </header>

        <section className='section__main'>
          <h3 className='section__title'>Learn More</h3>
          <div className='main__container'>
            <p className='main__container--paragraph'>
              We love our pets. Pet Pals builds community and fights loneliness.
              Share the responsibilities of potty breaks or short walks with
              your new Pet Pal. Create your profile, search for dog-lovers in
              your area, use our chat to set up a meeting at the featured local
              dog-friendly spots.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
