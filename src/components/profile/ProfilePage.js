import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
import { useSessionUser } from '../../hooks/getAuth';
import { useUserDelete } from '../../hooks/GetDeleteUsers';
import './ProfilePage.scss';

const ProfilePage = () => {
  const user = useSessionUser();
  if(!user){
    return null;
  }
  const handleDelete = () => {
    useUserDelete(user._id);
  };
  const handleEdit = () => {
    console.log('placeholder');
  };

  return (
    <>
      <p className='profileTitle'>Welcome{user.firstName}and{user.dogName}</p>
      <article key={user._id}>
        <ProfileCard
          key={user._id}
          firstName={user.firstName}
          dogName={user.dog[0].name}
          timeNeeded={user.timeNeeded}
          timeAvailable={user.timeAvailable}
          zipcode={user.address.zipcode}
          dogBio={user.dog[0].bio}
          bio={user.bio}
        />
      </article>
      
      
      
      
      <button onClick={handleEdit}>Edit Profile</button>
      
      
      
      
      <button onClick={handleDelete}>DELETE PROFILE</button>
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
