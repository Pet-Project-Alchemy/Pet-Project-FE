import React from 'react';
import ImageGallery from './ImageGallery';
import './ImageGallery.scss';
import './testimonials.scss';

export default function Testimonials() {
  return (
    <>
      <div className='wrapper'>
        <h1 className='text-center'>Testimonials</h1>
        <div className='speechbubble'>
          <p>
            "I work nights, and most dog-walking services end at 6. I am so
            happy to know that Spot gets his chance to go potty"
            <span className='username'>- Karen </span>
          </p>
        </div>
        <div className='speechbubble'>
          <p>
            "As a senior on a fixed income, I appreciate sharing with a
            neighbor. It is not just another service app"
            <span className='username'>-Meryl</span>
          </p>
        </div>
        <div className='speechbubble'>
          <p>
            "Pet pals isn't just a way to get your dog walked. It is a way to
            build connections."
            <span className='username'> -Sam</span>
          </p>
        </div>
      </div>
    </>
  );
}