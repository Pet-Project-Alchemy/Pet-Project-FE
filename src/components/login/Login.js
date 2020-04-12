import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import lab from '../assets/dogPhoto/login.png';
import {
  useLogin,
  useLogOut,
  useHasSession,
  useUserNull,
} from '../../hooks/getAuth';
import './Login.scss';

export default function UserLogin() {
  const authenticated = useHasSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();
  const { logout } = useLogOut();
  const history = useHistory();
  const setUserNull = useUserNull();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };
  const handleClick = () => {
    logout();
    setUserNull();
    history.push('/');
  };
  if(authenticated) {
    return (
      <>
        <section className='logout'>
          <button className='logoutButton' onClick={handleClick}>
            Log Out
          </button>
        </section>
      </>
    );
  }
  return (
    <>
      <div className='Login'>
        <div className='formWrap'>
          <div className='titleLogin'>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit} className='Loginform'>
            {authError && <p>{authError}</p>}
            <div className='Loginform'>
              <input
                className='input'
                value={email}
                name='email'
                onChange={({ target }) => setEmail(target.value)}
                placeholder='you@you.com'
              />
              <label htmlFor='email' className='label'>
                Email
              </label>
            </div>
            <div className='Loginform'>
              <input
                type='password'
                id='password'
                className='input'
                value={password}
                name='password'
                onChange={({ target }) => setPassword(target.value)}
                placeholder='******'
              />
              <label htmlFor='password' className='label'>
                Password
              </label>
              <div className='Loginform'>
                <button className='Loginsubmit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
