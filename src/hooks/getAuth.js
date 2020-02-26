import React, { createContext, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserLogin } from '../service/fetchLogin';
import { fetchVerify } from '../service/fetchVerify';
import { getUserSignup } from '../service/fetchSignup';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [authError, setAuthError] = useState();

  useEffect(() => {
    fetchVerify()
      .then(user => {
        setUser(user);
        // history.push();
      })
      .catch(() => {
        history.push('/');
      });
  }, []);
  const signup = formData => {
    getUserSignup(formData)
      .then(user => {
        setUser(user);
        history.push(`/zipcode/${user.address.zipcode}`);
      })
      .catch(err => {
        setAuthError(err);
      });
  };

  const login = (email, password) => {
    setAuthError(null);
    return getUserLogin(email, password)
      .then(user => {
        setUser(user);
        history.push('/');
      })
      .catch(err => {
        setAuthError(err.message);
      });
  };

  return (
    <SessionContext.Provider value={{ user, login, authError, signup }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionUser = () => {
  const { user } = useContext(SessionContext);
  return user;
};

export const useHasSession = () => {
  const user = useSessionUser();
  return !!user;
};

export const useLogin = () => {
  const { login, authError } = useContext(SessionContext);
  return { login, authError };
};

export const useAuthError = () => {
  const { authError } = useContext(SessionContext);
  return authError;
};
export const useSignup = () => {
  const { signup } = useContext(SessionContext);
  return signup;
};
