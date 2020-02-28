import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLogin, useLogOut, useHasSession, useUserNull } from '../../hooks/getAuth';
import './Login.scss';

export default function UserLogin() {
  const authenticated = useHasSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();
  const { logout } = useLogOut();
  const history = useHistory();
  const setUserNull = useUserNull();
  
  const handleSubmit = event => {
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
          <button className= 'logoutButton' onClick={handleClick}>Log Out</button>
        </section>
      </>
    );
  }


  return (
    <>
      <section className='section-Login'>
        <div className='Logingrid'>
          <div className='Login'>
            <div className='Login__form'>
              <form onSubmit={handleSubmit} className='Loginform'>
                <div className='title'>
                  <h2 className='Loginheading'>Login</h2>
                </div>
                {authError && <p>{authError}</p>}
                <div className='Loginform__group'>
                  <input
                    className='Loginform__input'
                    value={email}
                    name='email'
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder='you@you.com'
                  />
                  <label htmlFor='email' className='Loginform__label'>
                    Email
                  </label>
                </div>
                <div className='Loginform__group'>
                  <input
                    type='password'
                    id='password'
                    className='Loginform__input'
                    value={password}
                    name='password'
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder='******'
                  />
                  <label htmlFor='password' className='Loginform__label'>
                    Password
                  </label>
                </div>

                <div className='form__group'>
                  <button className='Loginsubmit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
