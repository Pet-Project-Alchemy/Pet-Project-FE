import React from 'react';
import './Home.scss';
import mp4 from '../assets/Dogs_Park.mp4';
import webm from '../assets/Dogs_Park.webm';
// import Nav from '../nav/Nav';

const Header = () => {
  return (
    <>
      <div className='background'>
        <header className='header'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src={webm} type='video/webm' />
              <source src={mp4} type='video/mp4' />
              your browser not supported
            </video>
          </div>
          <div className='header__text-box'>
            <h1 className='heading__primary'>
              <span className='heading-primary__sub--main'>Pet Pals</span>
              <span className='heading-primary__sub'>lets go outside</span>
            </h1>
          </div>
        </header>

        <section className='section__main'>
          <h3 className='section__title'>What pet pals is all about</h3>
          <div className='main__container'>
            <p className='main__container--paragraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              dolores itaque, ab reprehenderit obcaecati animi quasi ratione cum
              molestias nesciunt temporibus magni repellendus hic officiis
              expedita, facilis nobis ea possimus voluptatem ducimus tempora
              nemo dolorum sunt. Quam tenetur perspiciatis illo ea inventore
              beatae sapiente exercitationem repellat corrupti magni nesciunt
              necessitatibus debitis, rerum consequatur accusamus? 
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
