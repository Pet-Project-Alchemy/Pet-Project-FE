import React, { createContext, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserLogin } from '../service/fetchLogin';
import { fetchVerify } from '../service/fetchVerify';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [authError, setAuthError] = useState();

  useEffect(() => {
    fetchVerify()
      .then(user => {
        console.log(user);
        setUser(user);
        // if user is logged in previously you land on this page
        // history.push('/');
      })
      .catch(() => {
        history.push('/');
      });
  }, []);

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
    <SessionContext.Provider value={{ user, login, authError }}>
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
