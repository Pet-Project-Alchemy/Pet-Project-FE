import React, { useState } from 'react';
import { getUserSignup } from '../../service/fetchSignup';

export default function UserSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timeNeeded, setTimeNeeded] = useState('');
  const [timeAvailable, setTimeAvailable] = useState('');
  const [userBio, setUserBio] = useState('');
  const [userImage, setUserImage] = useState('');

  const [dogName, setDogName] = useState('');
  const [size, setSize] = useState('');
  const [breed, setBreed] = useState('');
  const [dogBio, setDogBio] = useState('');
  const [dogImage, setDogImage] = useState('');

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const stateFactoryMethod = {
    email: setEmail,
    password: setPassword,
    firstName: setFirstName,
    lastName: setLastName,
    timeNeeded: setTimeNeeded,
    timeAvailable: setTimeAvailable
  };
  const handleChange = ({ target }) => {
    stateFactoryMethod[target.name](target.value);
  };
  return (
    <>
      <form>
        <label htmlFor='email'>
          Email
          <input
            value={email}
            name='email'
            onChange={handleChange}
            placeholder='you@you.com'
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            value={password}
            name='password'
            onChange={handleChange}
            placeholder='******'
          />
        </label>
        <label htmlFor='firstName'>
          First Name{' '}
          <input
            value={firstName}
            name='firstName'
            onChange={handleChange}
            placeholder='Name'
          />
        </label>
        <label htmlFor='lastName'>
          Last Name{' '}
          <input
            value={lastName}
            name='lastName'
            onChange={handleChange}
            placeholder='Last Name'
          />
        </label>
        <div className='radioTimeNeeded'>
          <label>What time do you need  </label>
          <label htmlFor='6 till noon'>6am till Noon</label>
          <input
            type='radio'
            name='timeNeeded'
            value='6 till noon'
            onChange={handleChange}
          />
          <label htmlFor='noon till 6'>noon till 6pm</label>
          <input
            type='radio'
            name='timeNeeded'
            value='noon till 6'
            onChange={handleChange}
          />
          <label htmlFor='6 till midnight'>6pm till Midnight</label>
          <input
            type='radio'
            name='timeNeeded'
            value={'6 till midnight'}
            onChange={handleChange}
          />
        </div>
        <div className='radioTimeAvailable'>
          <label>What time do you have available  </label>
          <label htmlFor='6 till noon'>6am till Noon</label>
          <input
            type='radio'
            name='timeAvailable'
            value='6 till noon'
            onChange={handleChange}
          />
          <label htmlFor='noon till 6'>noon till 6pm</label>
          <input
            type='radio'
            name='timeAvailable'
            value='noon till 6'
            onChange={handleChange}
          />
          <label htmlFor='6 till midnight'>6pm till Midnight</label>
          <input
            type='radio'
            name='timeAvailable'
            value={'6 till midnight'}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}
