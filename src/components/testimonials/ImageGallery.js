import React, { useState } from 'react';
import './ImageGallery.scss';

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      image: 'https://photos.bringfido.com/photo/2014/12/01/wallace_park.jpg?size=hero&density=2x',
      name: 'Wallace Dog Park',
      // website: 'http://www.luckylab.com/',
      addressLink:
        'https://www.google.com/maps/place/Wallace+Dog+Park/@45.5336111,-122.7027777,17z/data=!4m5!3m4!1s0x0:0xe2449f99188567f6!8m2!3d45.5336111!4d-122.7027777',
      address: '1628 NW 25th Ave, Portland, OR 97210'
    },
    {
      image: 'https://www.portlandoregon.gov/shared/cfm/slb.cfm?id=531831',
      name: 'Couch Dog Park',
      // website: 'http://www.luckylab.com/',
      addressLink:
        'https://www.google.com/maps/place/Couch+Park/@45.5266564,-122.6926879,17z/data=!3m1!4b1!4m5!3m4!1s0x549509fb79cffce1:0xaf5d6ed627dc70fa!8m2!3d45.5266564!4d-122.6904992',
      address: '1961 NW Glisan St, Portland, OR 97209'
    },
    {
      image: 'https://preview.ibb.co/iZ3Lww/img2.jpg',
      name: 'Laurelhurst Park',
      // website: 'http://www.luckylab.com/',
      addressLink:
        'https://www.google.com/maps/place/Laurelhurst+Park/@45.5211073,-122.6294081,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a0eac4eeb42d:0xa26df736588d055e!8m2!3d45.5211073!4d-122.6272194',
      address: 'SE Cesar E Chavez Blvd & Stark St, Portland, OR 97214'
    },
    {
      image: 'https://preview.ibb.co/iZ3Lww/img2.jpg',
      name: 'Alberta Dog Park',
      // website: 'http://www.luckylab.com/',
      addressLink:
        'https://www.google.com/maps/place/Alberta+Park/@45.5644753,-122.6472932,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a6e3d71a4269:0x779c416cabef73d5!8m2!3d45.5644753!4d-122.6451045',
      address: '1905 NE Killingsworth St, Portland, OR 97211'
    },
    {
      image: 'https://www.wweek.com/resizer/9aVqJYuam2TQGg3jf0id1GNYAb0=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2017/02/24164156/Lucky-Lab_Emily-Joan-Greene_2.jpg',
      name: 'Lucky Labrador Beer Hall',
      website: 'http://www.luckylab.com/',
      addressLink:
        'https://www.google.com/maps/place/Lucky+Labrador+Beer+Hall/@45.5337194,-122.69175,17z/data=!3m1!4b1!4m5!3m4!1s0x549509e35233394f:0x7834494ec39a0d89!8m2!3d45.5337194!4d-122.69175',
      address: '1945 NW Quimby St Portland, OR'
    },
    {
      image: 'https://preview.ibb.co/iQsPOb/img3.jpg',
      name: 'Java Hound Coffee Bar',
      website: 'http://javahoundcoffee.com/',
      addressLink:
        'https://www.google.com/maps/place/Java+Hound+Coffee+Bar/@45.527235,-122.6983078,15z/data=!4m2!3m1!1s0x0:0xd06198ef5fd2b3cc?sa=X&ved=2ahUKEwig6J66_OPnAhViHjQIHYaZAyAQ_BIwC3oECA0QCA',
      address: '610 NW 23rd Ave Portland, OR'
    },
    {
      image: 'https://preview.ibb.co/gFFdib/img4.jpg',
      name: 'The Rambler',
      website: 'https://www.ramblerbar.com/',
      addressLink:
        'https://www.google.com/maps/place/The+Rambler/@45.554064,-122.6757746,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a76b61204467:0xfae14c65184a0756!8m2!3d45.554064!4d-122.6757746',
      address: '4205 N Mississippi Ave Portland, OR'
    },
    {
      image: 'https://res.cloudinary.com/sagacity/image/upload/v1438708571/victoria-2_w1wz8u.jpg',
      name: 'Victoria Bar',
      website: 'http://victoriapdx.com/',
      addressLink:
        'https://www.google.com/maps/place/Victoria+Bar/@45.5580195,-122.6752576,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a712ee8d9a13:0xfe173a70116370f0!8m2!3d45.5580195!4d-122.6752576',
      address: '4835 N Albina Ave Portland, OR 97217'
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/5c75b4137eb88c1570f1435c/1556052975071-HCH6ENPLJLZNENHGFZB8/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/20181019-+Basecamp60e-9BCBC+Website.jpg',
      name: 'Base Camp Brewing',
      website: 'https://www.basecampbrewingco.com/',
      addressLink:
        'https://www.google.com/maps/place/Base+Camp+Brewing+Company/@45.519906,-122.655955,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a0a420525745:0x8614e4a7e267c842!8m2!3d45.519906!4d-122.655955',
      address: ' 930 SE Oak St Portland, OR'
    },
    {
      image: 'https://preview.ibb.co/bSWjOb/img7.jpg',
      name: 'Marthas',
      website: 'http://www.marthaspdx.com/',
      addressLink:
        'https://www.google.com/maps/place/Marthas/@45.5187614,-122.6523241,15z/data=!4m2!3m1!1s0x0:0xa7dbf1a8b0b778ca?sa=X&ved=2ahUKEwjSxbGn9OPnAhUPHzQIHejTCMYQ_BIwDHoECBIQCA',
      address: '1300 SE Stark St Portland, OR 97214'
    },
    {
      image: 'https://preview.ibb.co/i2o9pG/img8.jpg',
      name: 'Tin Shed Garden Cafe',
      website: 'http://tinshedgardencafe.com/',
      addressLink:
        'https://www.google.com/maps/place/Tin+Shed+Garden+Cafe/@45.558964,-122.6508761,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a71f3ac8759b:0x1eb070bdecf8f04b!8m2!3d45.558964!4d-122.6508761',
      address: '1438 NE Alberta St Portland, OR 97211'
    },
    {
      image: 'https://preview.ibb.co/i2o9pG/img8.jpg',
      name: 'The Station',
      website: 'http://stationpdx.com/',
      addressLink:
        'https://www.google.com/maps/place/The+Station+Pizza+Pub/@45.5591667,-122.6377778,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a6de507b907b:0x8afef9f51c461927!8m2!3d45.5591667!4d-122.6377778',
      address: '  2603 NE Alberta Portland, OR'
    },
    {
      image: 'https://preview.ibb.co/i2o9pG/img8.jpg',
      name: 'Pizza Jerk',
      website: 'http://www.pizzajerkpdx.com/',
      addressLink:
        'https://www.google.com/maps/place/Pizza+Jerk/@45.5384012,-122.6396814,14z/data=!4m8!1m2!2m1!1spizza+jerk!3m4!1s0x5495a6c451aa1d6d:0x9c4db7ce86fb01ac!8m2!3d45.559372!4d-122.6202198',
      address: '5028 NE 42nd Ave Portland, OR'
    }
  ];

  const handleClick = ({ target }) => {
    setActiveIndex(target.name);
  };

  const thumbnails = images.map((img, i) => {
    return (
      <li key={i} name={i} onClick={handleClick}>
        <img src={img.image} name={i} />
      </li>
    );
  });

  return (
    <>
      <div className='container'>
        <div className='main'>
          <img className='main-image' src={images[activeIndex].image} />
          <h2>{images[activeIndex].name}</h2>
          <a target='_blank' href={images[activeIndex].addressLink}>
            Directions
          </a>
          <a target='_blank' href={images[activeIndex].website}>
            Website
          </a>
          <p>{images[activeIndex].address}</p>
        </div>
        <ul>{thumbnails}</ul>
      </div>
    </>
  );
}
