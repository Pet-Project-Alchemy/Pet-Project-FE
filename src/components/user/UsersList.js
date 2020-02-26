import React from 'react';
import { useUsersViaZipcode } from '../../hooks/getUsersViaZipcode';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import './Users.scss';

const UserList = ({ match }) => {
  const { userZipcode, loading } = useUsersViaZipcode(match.params.zipcode);
  if(loading)
    return (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
      </div>
    );
  if(userZipcode.length <= 1) {
    return (
      <p className='error'>Your the fist one in zipcode</p>
    );
  }

  const userList = userZipcode.map(user => {
  
    return (
      <>
        <div className='container'>
          <Link className='Link' to={`/chat/${user._id}`}>
            <UserCard
              key={user._id}
              firstName={user.firstName}
              dogName={user.dog[0].name}
              timeNeeded={user.timeNeeded}
              timeAvailable={user.timeAvailable}
              zipcode={user.address.zipcode}
              dogBio={user.dog[0].bio}
              bio={user.bio}
            />
          </Link>
        </div>
      </>
    );
  });
  return <ul className='ul'>{userList}</ul>;
};

UserList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      zipcode: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default UserList;
