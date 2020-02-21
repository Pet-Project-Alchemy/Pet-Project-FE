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
    timeAvailable: setTimeAvailable,
    userBio: setUserBio,
    userImage: setUserImage,
    dogName: setDogName,
    size: setSize,
    breed: setBreed,
    dogBio: setDogBio,
    dogImage: setDogImage,
    street: setStreet,
    city: setCity,
    state: setState,
    zipcode: setZipcode
  };
  const handleChange = ({ target }) => {
    stateFactoryMethod[target.name](target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    getUserSignup(email, password, firstName, timeNeeded, lastName, timeAvailable, userImage, userBio, street, city, state, zipcode, dogName, size, breed, dogBio, dogImage);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <label>What time do you need </label>
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
            value='6 till midnight'
            onChange={handleChange}
          />
        </div>
        <div className='radioTimeAvailable'>
          <label>What time do you have available </label>
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
        <label htmlFor='userBio'>
          Tell us about yourself
          <textarea
            name='userBio'
            value={userBio}
            onChange={handleChange}
            placeholder='Tell us about you'
          />
        </label>
        <label htmlFor='userImage'>
          <input type='file' onChange={handleChange} />
        </label>
        <label htmlFor='dogName'>
          What is your pups name
          <input
            value={dogName}
            name='dogName'
            onChange={handleChange}
            placeholder='spot'
          />
        </label>
        <div className='radioDogSize'>
          <label>How big is your dog </label>
          <label htmlFor='XS'>XS</label>
          <input type='radio' name='size' value='XS' onChange={handleChange} />
          <label htmlFor='S'>S</label>
          <input type='radio' name='size' value='S' onChange={handleChange} />
          <label htmlFor='M'>M</label>
          <input type='radio' name='size' value='M' onChange={handleChange} />
          <label htmlFor='L'>L</label>
          <input type='radio' name='size' value='L' onChange={handleChange} />
          <label htmlFor='XL'>XL</label>
          <input type='radio' name='size' value='XL' onChange={handleChange} />
        </div>
        <label htmlFor='breed'>
          Dog Breed{' '}
          <input
            value={breed}
            name='breed'
            onChange={handleChange}
            placeholder='Dog Breed'
          />
        </label>
        <label>
          Tell us about yourself
          <textarea
            name='dogBio'
            value={dogBio}
            onChange={handleChange}
            placeholder='Tell us about your best friend'
          />
        </label>
        <label htmlFor='dogImage'>
          <input type='file' onChange={handleChange} />
        </label>
        <label htmlFor='street'>
          Street Address
          <input
            value={street}
            name='street'
            onChange={handleChange}
            placeholder='55 Spot way'
          />
        </label>
        <label htmlFor='city'>
          City
          <input
            value={city}
            name='city'
            onChange={handleChange}
            placeholder='RoverCity'
          />
        </label>
        <label htmlFor='state'>
          State
          <input
            value={state}
            name='state'
            onChange={handleChange}
            placeholder='Oregon'
          />
        </label>
        <label htmlFor='zipcode'>
          Zipcode
          <input
            value={zipcode}
            name='zipcode'
            onChange={handleChange}
            placeholder='55555'
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};


