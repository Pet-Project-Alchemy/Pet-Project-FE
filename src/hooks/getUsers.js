import { useEffect, useState } from 'react';
import { getUsers } from '../services/fetchUser';

export const useUsers = id => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUsers(id)
      .then(resObject => {
        setUsers(resObject.releases);
      })
      .finally(() => setLoading(false));
  }, []);
  return { users, loading };
};
