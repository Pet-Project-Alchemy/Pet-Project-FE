import React, { useState } from 'react';
import { useLogin } from '../../hooks/getAuth';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {authError && <p>{authError}</p>}
      <label htmlFor='email'>
          Email
        <input
          value={email}
          name='email'
          onChange={({ target }) => setEmail(target.value)}
          placeholder='you@you.com'
        />
      </label>
      <label htmlFor='password'>
          Password
        <input
          value={password}
          name='password'
          onChange={({ target }) => setPassword(target.value)}
          placeholder='******'
        />
      </label>
      <button>Login</button>
    </form>
  );
}
