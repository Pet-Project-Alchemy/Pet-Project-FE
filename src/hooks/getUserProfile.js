import { useEffect, useState } from 'react';
import { getUserProfile } from '../service/fetchUser';

export const useUserProfile = id => {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserProfile(id)
      .then(resObject => {
        console.log(resObject);
        setUserProfile(resObject);
      })
      .finally(() => setLoading(false));
  }, [id]);
  return { userProfile, loading };
};
