import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
import { useUserProfile } from '../../hooks/getUserProfile';
import './ProfilePage.scss';
// import { Link } from 'react-router-dom';
import './ProfilePage.scss';

const ProfilePage = ({ match }) => {
  const { userProfile, loading } = useUserProfile(match.params.user_id);
  if (loading)
    return (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
      </div>
    );
  return (
    <>
      <p className='profileTitle'>Welcome{userProfile.name}and{userProfile.dogName}</p>
      <article key={userProfile.id}>
        <ProfileCard
          key={userProfile._id}
          firstName={userProfile.firstName}
          dogName={userProfile.dog[0].name}
          timeNeeded={userProfile.timeNeeded}
          timeAvailable={userProfile.timeAvailable}
          zipcode={userProfile.address.zipcode}
          dogBio={userProfile.dog[0].bio}
          bio={userProfile.bio}
        />
      </article>
    </>
  );
};
ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user_id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
export default ProfilePage;
