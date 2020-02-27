import React from 'react';
import { useUsersViaZipcode } from '../../hooks/getUsersViaZipcode';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import './UserList.scss';
import { Link } from 'react-router-dom';
import './UserList.scss';
import { useSessionUser } from '../../hooks/getAuth';

const UserList = ({ match }) => {

  const user = useSessionUser();
  if(!user){
    return null;
  }


  const { userZipcode, loading } = useUsersViaZipcode(match.params.zipcode);
  if(loading)
    return (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
      </div>
    );

  if(userZipcode.length <= 1)
    return (
      <p className='error'>
        You are the first one in this zipcode, check back soon
      </p>
    );

  const userList = userZipcode.map(user => {
    
    return (
      <>
        <Link className='LinkUserList' to={`/chat/${user._id}`}>
          <UserCard
            key={user._id}
            firstName={user.firstName}
            dogName={user.dog[0].name}
            timeNeeded={user.timeNeeded}
            timeAvailable={user.timeAvailable}
            zipcode={user.address.zipcode}
            dogBio={user.dog[0].bio}
            bio={user.bio}
            userImg={user.image}
            dogImg={user.dog[0].img}
          />
        </Link>
      </>
    );
  });
  return (
    <>
      <p className='otherUsers'>Hello, {user.firstName} The pet pals in {match.params.zipcode}</p>;
      <ul className='ulUserList'>{userList}</ul>
    </>
  );
};

UserList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      zipcode: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default UserList;
