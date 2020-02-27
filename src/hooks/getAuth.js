import React, { createContext, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserLogin } from '../service/fetchLogin';
import { fetchVerify } from '../service/fetchVerify';
import { fileUpload } from '../service/postImage';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchVerify()
      .then(user => {
        setUser(user);
        setLoading(false);
      })
      .catch(() => {
        history.push('/');
        setLoading(false);
      });
  }, []);
  const signup = (formData) => {

    setLoading(true);
    fileUpload(formData)
      .then(user => {
        setUser(user);
        setLoading(false);
        history.push(`/zipcode/${user.address.zipcode}`);
      })
      .catch(err => {
        setAuthError(err);
        setLoading(false);
      });
  };

  const login = (email, password) => {
    setLoading(true);
    setAuthError(null);
    return getUserLogin(email, password)
      .then(user => {
        setUser(user);
        setLoading(false);
        history.push('/');
      })
      .catch(err => {
        setAuthError(err.message);
        setLoading(false);
      });
  };

  return (
    <SessionContext.Provider
      value={{ user, login, authError, signup, loading }}
    >
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

export const useSessionLoading = () => {
  const { loading } = useContext(SessionContext);
  return loading;
};
