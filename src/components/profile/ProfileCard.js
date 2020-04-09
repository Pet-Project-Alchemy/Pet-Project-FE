import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.scss';
import UserCard from '../user/UserCard';

const ProfileCard = () => {
  return (
    <div className='profileCard'>
      <UserCard />
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
  dogBio: PropTypes.string.isRequired,
};
export default ProfileCard;
