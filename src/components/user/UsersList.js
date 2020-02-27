import React from 'react';
import { useUsersViaZipcode } from '../../hooks/getUsersViaZipcode';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import './UserList.scss';
import { Link } from 'react-router-dom';
import './UserList.scss';

const UserList = ({ match }) => {
  const { userZipcode, loading } = useUsersViaZipcode(match.params.zipcode);
  if (loading)
    return (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
      </div>
    );

  if(userZipcode.length <= 1)
    return (
      <p className='error'>
        Your the first one in this zipcode, check back soon
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
            userImage={user.userImage}
            dogImage={user.dogImage}
            dogBio={user.dog[0].bio}
            userBio={user.user.Bio}
          />
        </Link>
      </>
    );
  });
  return (
    <>
      <p className='otherUsers'>The pet pals in {match.params.zipcode}</p>;
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
