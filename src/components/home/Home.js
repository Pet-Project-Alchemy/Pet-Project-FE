import React from 'react';
import './Home.scss';
import mp4 from '../assets/its-clark.mp4';
import webm from '../assets/its-clark.webm';

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
