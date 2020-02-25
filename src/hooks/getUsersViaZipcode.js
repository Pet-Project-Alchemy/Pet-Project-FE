import { useEffect, useState } from 'react';
import { getUsersViaZipcode } from '../service/fetchUsersViaZipcode';

export const useUsersViaZipcode = zipcode => {
  const [userZipcode, setUserZipcode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUsersViaZipcode(zipcode)
      .then(resObject => {
        setUserZipcode(resObject);
      })
      .finally(() => setLoading(false));
  }, [zipcode]);
  return { userZipcode, loading };
};
