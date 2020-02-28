import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
import { Link } from 'react-router-dom';
import { useSessionUser } from '../../hooks/getAuth';
import './ProfilePage.scss';

const ProfilePage = () => {
  const user = useSessionUser();  
  if(!user){
    return null;
  }


  return (
    <>
      <p className='profileTitle'>Welcome {user.firstName} and {user.dog[0].name}</p>
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
      <div className='profilePageDiv'>
        <Link to={`/editform/${user._id}`}>
          <button className='editBtn'>Edit</button>
        </Link>
      </div>
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
