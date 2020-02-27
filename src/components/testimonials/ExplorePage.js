import React from 'react';
import ImageGallery from './ImageGallery';
import Testimonials from './Testimonials';
import './Explore-Page.scss';

export default function Explore() {
  return (
    <>
      <div className='explore-page'>
        <Testimonials />
        <ImageGallery />
      </div>
    </>
  );
}
