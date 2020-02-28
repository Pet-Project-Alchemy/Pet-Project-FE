import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.scss';
import defaultUserImg from '../assets/profile.png';
import defaultDogImage from '../assets/dog.png';


const ProfileCard = ({
  firstName,
  dogName,
  userImg,
  dogImg,
  timeNeeded,
  timeAvailable,
  bio,
  dogBio
}) => {
  return (
    <div className='ProfileCard'>
      <div className='ProfileCard__side ProfileCard__side--front'>
        <div className='ProfileCard__picture ProfileCard__picture--1'>
          <div className='ProfileCard__picture ProfileCard__img'>
            <img className='userImg' src={userImg ? userImg : defaultUserImg} />
            <figcaption>
              <span className='ProfileCard__heading-span ProfileCard__heading-span--1'>
                {firstName}
              </span>
            </figcaption>
            <img className='dogImg' src={dogImg ? dogImg : defaultDogImage} />
            <figcaption>
              <span className='ProfileCard__heading-span ProfileCard__heading-span--2'>
                {dogName}&nbsp;
              </span>
            </figcaption>
          </div>
        </div>
        <div className='ProfileCard__details'>
          <ul>
            <li>I can help {timeAvailable}</li>
            <li>I need help {timeNeeded}</li>
          </ul>
        </div>
      </div>
      <div className='ProfileCard__side ProfileCard__side--back ProfileCard__side--back-1'>
        <div className='ProfileCard__cta'>
          <div className='ProfileCard__bio-box'>
            <p className='ProfileCard__bio-text'>{bio}</p>
            <p className='ProfileCard__bio-text'>{dogBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  dogName: PropTypes.string.isRequired,
  userImg: PropTypes.string,
  dogImg: PropTypes.string,
  profileImg: PropTypes.string,
  timeNeeded: PropTypes.string.isRequired,
  timeAvailable: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  dogBio: PropTypes.string.isRequired
};
export default ProfileCard;
