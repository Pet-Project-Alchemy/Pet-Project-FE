import React from 'react';
import './AboutUs.scss';
import eve from '../assets/aboutUs/eveisla.png';
import nikki from '../assets/aboutUs/nikki.png';


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
            <li className='Li'>
              <a href='https://www.github.com/evestockstill'>
                https://www.github.com/evestockstill
              </a>
            </li>
            <li className='Li'>
              <a href='https://www.linkedin.com/in/evestockstill/'>
                https://www.linkedin.com/in/evestockstill
              </a>
            </li>
          </div>
        </article>

        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={nikki} alt='nikki picture' />
          </div>
          <h3 className='about__name'>Nikki Sato</h3>
          <div className='about__info'>
            a huge lover of Front End Design / Development! I loved combining my
            creative side with a dash of coding. I&apos;m also a local portland
            photography you can catch me wandering around portland catching
            reflections.
            <li className='Li'>https://www.linkedin.com/in/nikkisato/</li>
            <li className='Li'>https://www.linkedin.com/in/evestockstill/</li>
          </div>
        </article>

        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={eve} alt='eve picture' />
          </div>
          <h3 className='about__name'>Eve Stockstill</h3>
          <div className='about__info'>
            I am a software developer who is obsessed with her dog in my free
            time, I find new ways to spoil her, or you can find me around a pool
            table.
            <li className='Li'>https://github.com/evestockstill</li>
            <li className='Li'>https://www.linkedin.com/in/evestockstill/</li>
          </div>
        </article>

        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={eve} alt='eve picture' />
          </div>
          <h3 className='about__name'>Eve Stockstill</h3>
          <div className='about__info'>
            I am a software developer who is obsessed with her dog in my free
            time, I find new ways to spoil her, or you can find me around a pool
            table.
            <li className='Li'>a href= 'https://github.com/evestockstill'</li>
            <li className='Li'>https://www.linkedin.com/in/evestockstill/</li>
          </div>
        </article>
        <article className='about'>
          <div className='img__container'>
            <img className='about__image' src={eve} alt='eve picture' />
          </div>
          <h3 className='about__name'>Eve Stockstill</h3>
          <div className='about__info'>
            <li className='Li'>https://github.com/evestockstill</li>
            <li className='Li'>https://www.linkedin.com/in/evestockstill/</li>
          </div>
        </article>
      </ul>
    </>
  );
};

// import nikki from '../assets/aboutUs/nikki-sato.jpg';

// import sam from '../assets/aboutUs/sam-sterns.jpg';

// import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

// const AboutUs = () => (
//   <>
//     <div>
//       <div>
//         <img src={nikki}></img>
//         <h1>Nikki Sato</h1>
//         <p>
//           a huge lover of Front End Design/Development! I loved combining my
//           creative side with a dash of coding. I'm also a local portland
//           photography you can catch me wandering around portland catching
//           reflections.
//         </p>
        // <a href='https://www.linkedin.com/in/nikkisato/'>
//           <FaLinkedin size={32} />
//         </a>
//         <a href='https://github.com/nikkisato'>
//           <FaGithubSquare size={32} />
//         </a>
//       </div>

//       <div>
//         <img src={sam}></img>
//         <h1>Sam Sterns</h1>
//         <p>
//           Full-Stack developer whose growth mindset and expertise in restorative
//           conflict resolution inform their passion for solving people centered
//           problems. I believe technology is a tool to build equity.
//         </p>
//         <a href='https://www.linkedin.com/in/samsterns/'>
//           <FaLinkedin size={32} />
//         </a>
//         <a href='https://github.com/samSterns'>
//           <FaGithubSquare size={32} />
//         </a>
//       </div>

//       <div>
//         {/* <img src={eve}></img> */}
//         <h1>Eve Stockstill</h1>
//         <p>Full-Stack Software developer.</p>
//         <a href='https://www.linkedin.com/in/evestockstill/'>
//           <FaLinkedin size={32} />
//         </a>
//         <a href='https://github.com/evestockstill'>
//           <FaGithubSquare size={32} />
//         </a>
//       </div>

//       <div>
//         {/* <img src={zak}></img> */}
//         <h1>Zak Hyslin</h1>
//         <p>Full-Stack developer.</p>
//         <a href='https://www.linkedin.com/in/zak-hyslin-2a144519b/'>
//           <FaLinkedin size={32} />
//         </a>
//         <a href='https://github.com/rapscalan'>
//           <FaGithubSquare size={32} />
//         </a>
//       </div>

//       <div>
//         {/* <img src={caleb}></img> */}
//         <h1>Caleb Pendergraft</h1>
//         <p>Full-Stack developer.</p>
//         <a href='https://www.linkedin.com/in/calebpendergraft/'>
//           <FaLinkedin size={32} />
//         </a>
//         <a href='https://github.com/cackmed'>
//           <FaGithubSquare size={32} />
//         </a>
//       </div>
//     </div>
//   </>
// );

export default AboutUs;
