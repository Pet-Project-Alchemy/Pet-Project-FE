import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';
import defaultUserImg from '../assets/dogLogo.png';
import defaultDogImg from '../assets/dogLogo.png';

const UserCard = ({
  firstName,
  dogName,
  img,
  dogImg,
  timeNeeded,
  timeAvailable,
  zipcode,
  bio,
  dogBio
}) => (
  <div className='card'>
    <div className='card__side card__side--front'>
      <div className='card__picture card__picture--1'>&nbsp;</div>
      <h4 className='card__heading'>
        <span className='card__heading-span card__heading-span--1'>
          {firstName}{dogName}
        </span>
      </h4>
      <img className='userImg' src={img ? img : defaultUserImg} />
      <img className='dogImg' src={dogImg ? dogImg : defaultDogImg} />
      <div className='card__details'>
        <ul>
          <li>{zipcode}</li>
          <li>{timeAvailable}</li>
          <li>{timeNeeded}</li>
        </ul>
      </div>
    </div>
    <div className='card__side card__side--back card__side--back-1'>
      <div className='card__cta'>
        <div className='card__bio-box'>
          <p className='card__bio-text'>{bio}</p>
          <p className='card__bio-text'>{dogBio}</p>
        </div>
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  dogName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  dogImg: PropTypes.string.isRequired,
  timeNeeded: PropTypes.string.isRequired,
  timeAvailable: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  dogBio: PropTypes.string.isRequired
};
export default UserCard;
