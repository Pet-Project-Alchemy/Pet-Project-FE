import React, { useState } from 'react';
import './ImageGallery.scss';

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://preview.ibb.co/gxVppG/img1.jpg',
    'https://preview.ibb.co/iZ3Lww/img2.jpg',
    'https://preview.ibb.co/iQsPOb/img3.jpg',
    'https://preview.ibb.co/gFFdib/img4.jpg',
    'https://preview.ibb.co/hS5ppG/img5.jpg',
    'https://preview.ibb.co/goKtGw/img6.jpg',
    'https://preview.ibb.co/bSWjOb/img7.jpg',
    'https://preview.ibb.co/i2o9pG/img8.jpg'
  ];

  const handleClick = ({ target }) => {
    console.log('handleClick', target);
    setActiveIndex(target.name);
  };

  const thumbnails = images.map((img, i) => {
    return (
      <li key={i} name={i} onClick={handleClick}>
        <img src={img} name={i} />
      </li>
    );
  });

  return (
    <>
      <div className='container'>
        <div className='main-img'>
          <img src={images[activeIndex]} />
        </div>
        <ul>{thumbnails}</ul>
      </div>
    </>
  );
}
