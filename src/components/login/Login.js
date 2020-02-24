import React, { useState } from 'react';
import { getUserLogin } from '../../service/fetchLogin';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    getUserLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}
