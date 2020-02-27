import { useState } from 'react';
import { getUsersandDeleteThem } from '../service/fetchUserDelete';

export const useUserDelete = id => {
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  
  setLoading(true);
  getUsersandDeleteThem(id)
    .then(user => {
      setUser(user);
      setLoading(false);
      history.push('/');
    })
    .catch(err => {
      console.log(err);  
      setLoading(false);
    });
  return { User, loading };
};
