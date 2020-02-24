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
  if(!userZipcode.length) return;
  <p className='error'>There are no users with your search criteria.</p>;

  const userList = userZipcode.map(user => {
    return (
      <>
        <div className='container'>
          <Link key={user._id} className='Link' to={`/message/${user._id}`}>
            <UserCard {...user}/>
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
      zipcode: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default UserList;
