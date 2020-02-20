import React, { useState } from 'react';
import { getUserSignup } from '../../service/fetchSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    getUserSignup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder='email'
      />
      <input
        type='text'
        name='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder='password'
      />
      <button>Signup</button>
    </form>
  );
};

export default Signup;

