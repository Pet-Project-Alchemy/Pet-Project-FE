import React from 'react';
import './testimonials.scss';

export default function Testimonials() {
  return (
    <>
      <div className='wrapper'>
        {/* <h1>Testimonials</h1> */}
        <div className='speechbubble'>
          <p className="testimonials-p">
            "I work nights, and most dog-walking services end at 6. I am so
            happy to know that Spot gets his chance to go potty"
            <span className='username'>Karen </span>
          </p>
        </div>
        <div className='speechbubble'>
          <p className="testimonials-p">
            "As a senior on a fixed income, I appreciate sharing with a
            neighbor. It is not just another service app"
            <span className='username'>Meryl</span>
          </p>
        </div>
        <div className='speechbubble'>
          <p className="testimonials-p">
            "Pet pals isn't just a way to get your dog walked. It is a way to
            build connections."
            <span className='username'>Sam</span>
          </p>
        </div>
      </div>
    </>
  );
}
