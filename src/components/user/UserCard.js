import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';
import defaultUserImg from '../assets/profile.png';

const UserCard = ({
  firstName,
  dogName,
  userImage,
  dogImage,
  timeNeeded,
  timeAvailable,
  userBio,
  dogBio
}) => (
  <div className='card'>
    <div className='card__side card__side--front'>
      <div className='card__picture card__picture--1'>
        <div className='card__picture card__img'>
          <img className='userImg' src={userImage ? userImage : defaultUserImg} />
          <figcaption>
            <span className='card__heading-span card__heading-span--1'>
              {firstName}&nbsp;&
            </span>
          </figcaption>
          <section
            className='dogImg'
            style={{ backgroundImage: `url(${dogImage})` }}
          />
          <figcaption>
            <span className='card__heading-span card__heading-span--2'>
              {dogName}&nbsp;
            </span>
          </figcaption>
        </div>
      </div>
      <div className='card__details'>
        <ul>
          <li>I can help {timeAvailable}</li>
          <li>I need help {timeNeeded}</li>
        </ul>
      </div>
    </div>
    <div className='card__side card__side--back card__side--back-1'>
      <div className='card__cta'>
        <div className='card__bio-box'>
          <p className='card__bio-text'>{userBio}</p>
          <p className='card__bio-text'>{dogBio}</p>
        </div>
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  dogName: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  dogImage: PropTypes.string,
  profileImg: PropTypes.string,
  timeNeeded: PropTypes.string.isRequired,
  timeAvailable: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  userBio: PropTypes.string.isRequired,
  dogBio: PropTypes.string.isRequired
};
export default UserCard;
