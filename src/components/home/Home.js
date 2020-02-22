import React from 'react';
import './Home.scss';
// import Nav from '../nav/Nav';

const Header = () => {
  return (
    <>
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
              necessitatibus debitis, rerum consequatur accusamus? Neque atque
              eum error laudantium minima ipsam animi saepe. Ullam, excepturi
              minima! Voluptatibus, eaque nemo reprehenderit deserunt facere
              porro tenetur at? Sit vel eum ipsa illo voluptatum! Totam, iure,
              voluptatum dignissimos sunt id molestias illum in deserunt
              
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
