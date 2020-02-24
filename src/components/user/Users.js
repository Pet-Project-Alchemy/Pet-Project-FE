import React from 'react';
import { useUsers } from '../../hooks/users';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import './Users.scss';

const UserList = () => {
  const { users, loading } = useUsers();
  if(loading)
    return (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
      </div>
    );
  if(!users.length) return;
  <p className='error'>There are no users with your search criteria.</p>;

  const userList = users.map(user => {
    return (
      <>
        <div className='container'>
          <Link key={user._id} className='Link' to={`/message/${user._id}`}>
            <UserCard />
          </Link>
        </div>
      </>
    );
  });
  return <ul className='ul'>{userList}</ul>;
};

export default UserList;
