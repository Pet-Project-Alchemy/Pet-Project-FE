import React from 'react';
import './AboutUs.scss';
import eve from '../assets/aboutUs/eveisla.png';
import nikki from '../assets/aboutUs/nikki.png';
import zak from '../assets/aboutUs/zak.jpg';
import sam from '../assets/aboutUs/sam-sterns.jpg';
import caleb from '../assets/aboutUs/caleb.jpeg';

const AboutUs = () => {
  return (
    <>
      <h2 className='aboutTitle'>Meet the pack</h2>
      <ul className='AboutUl'>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={eve} alt='eve picture' />
          </div>
          <h3 className='about__name'>Eve Stockstill</h3>
          <div className='about__info'>
            I am a software developer who is obsessed with her dog in my free
            time, I find new ways to spoil her, or you can find me around a pool
            table.
            <div className='social-link'>
              <a
                className='links'
                href='https://www.linkedin.com/in/evestockstill/'
              >
                Linkedin
              </a>
              <a className='links' href='https://www.github.com/evestockstill'>
                Github
              </a>
            </div>
          </div>
        </article>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={nikki} alt='nikki picture' />
          </div>
          <h3 className='about__name'>Nikki Sato</h3>
          <div className='about__info'>
            Full Stack Developer with a huge lover of Front End
            Design/Development! I loved combining my creative side with a dash
            of coding.
            <div className='social-link'>
              <a
                className='links'
                href='https://www.linkedin.com/in/nikkisato/'
              >
                Linkedin
              </a>
              <a className='links' href='https://www.github.com/nikkisato'>
                Github
              </a>
            </div>
          </div>
        </article>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={zak} alt='eve picture' />
          </div>
          <h3 className='about__name'>Zak Hyslin</h3>
          <div className='about__info'>
            Zak is a software developer who enjoys the Oregon coast and
            competing on Codesignal in his spare time.
            <div className='social-link'>
              <a
                className='links'
                href='https://www.linkedin.com/in/zak-hyslin-2a144519b/'
              >
                Linkedin
              </a>
              <a className='links' href='https://github.com/rapscalan'>
                Github
              </a>
            </div>
          </div>
        </article>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={caleb} alt='eve picture' />
          </div>
          <h3 className='about__name'>Caleb Pendergraft</h3>
          <div className='about__info'>
            Caleb is from Portland, Oregon. When not learning to code he can be
            found walking his dog around Columbia Park, listening to history
            podcasts, or having lively arguments with his roommate.
            <div className='social-link'>
              <a
                className='links'
                href='https://www.linkedin.com/in/calebpendergraft/'
              >
                Linkedin
              </a>
              <a className='links' href='https://github.com/cackmed'>
                Github
              </a>
            </div>
          </div>
        </article>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={sam} alt='eve picture' />
          </div>
          <h3 className='about__name'>Sam Sterns</h3>
          <div className='about__info'>
            Full-Stack developer whose growth mindset and expertise in
            restorative conflict resolution inform their passion for solving
            people centered problems. I believe technology is a tool to build
            equity.
            <div className='social-link'>
              <a
                className='links'
                href='https://www.linkedin.com/in/samsterns/'
              >
                Linkedin
              </a>
              <a className='links' href='https://github.com/samSterns'>
                Github
              </a>
            </div>
          </div>
        </article>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={eve} alt='eve picture' />
          </div>
          <h3 className='about__name'>Isla</h3>
          <div className='about__info'>
            I live for treats and being petted! Most of the time I would
            endlessly chase the ball, unless of course I see a squirrel. I love
            long runs on the beach at sunset.
          </div>
        </article>
      </ul>
    </>
  );
};

export default AboutUs;
