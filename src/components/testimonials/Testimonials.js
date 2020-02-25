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
            HI
            <span className='username'>Nikki Sato</span>
          </p>
        </div>
        <div className='speechbubble'>
          <p>
            So I created this thread to see if anyone wants to work on creating
            an N Wheeled classNameName vehicle with me, as opposed to a bunch of
            people banging their heads against the wall seperately.
            <span className='username'>Eve Stockstill</span>
          </p>
        </div>
        <div className='speechbubble'>
          <p>
            So I created this thread to see if anyone wants to work on creating
            an N Wheeled classNameName vehicle with me, as opposed to a bunch of
            people banging their heads against the wall seperately.
            <span className='username'>Sam Sterns</span>
          </p>
        </div>
        <div className='speechbubble'>
          <p>
            So I created this thread to see if anyone wants to work on creating
            an N Wheeled className vehicle with me, as opposed to a bunch of
            people banging their heads against the wall seperately.
            <span className='username'>BOB</span>
          </p>
        </div>
      </div>
      <ImageGallery />
    </>
  );
}
