import React, { useState } from 'react';
import { useLogin } from '../../hooks/getAuth';
import { Link } from 'react-router-dom';


export default function UserLogin() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();
 

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <>
      <section className='section-login'>
        <div className='grid'>
          <div className='login'>
            <div className='login__form'>
              <form onSubmit={handleSubmit} className='form'>
                <div className='title'>
                  <h2 className='heading'>Login</h2>
                </div>
                {authError && <p>{authError}</p>}
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={email}
                    name='email'
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder='you@you.com'
                  />
                  <label htmlFor='email' className='form__label'>Email</label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={password}
                    name='password'
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder='******'
                  />
                  <label htmlFor='password' className='form__label'>Password</label>
                </div>
                <Link to={'/zipcode/:zipcode'}>
                  <div className='form__group'>
                    <button className='submit'>Submit</button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
