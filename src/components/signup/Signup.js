import React, { useState } from 'react';
import { getUserSignup } from '../../service/fetchSignup';
import './Signup.scss';

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
    getUserSignup(
      email,
      password,
      firstName,
      timeNeeded,
      lastName,
      timeAvailable,
      userImage,
      userBio,
      street,
      city,
      state,
      zipcode,
      dogName,
      size,
      breed,
      dogBio,
      dogImage
    );
  };
  return (
    <>
      <section className='section-signup'>
        <div className='grid'>
          <div className='signup'>
            <div className='signup__form'>
              <form onSubmit={handleSubmit} className='form'>
                <div className='title'>
                  <h2 className='heading'>Sign up!</h2>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={email}
                    name='email'
                    onChange={handleChange}
                    placeholder='you@you.com'
                  />
                  <label htmlFor='email' className='form__label'>
                    Email
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={password}
                    name='password'
                    onChange={handleChange}
                    placeholder='******'
                  />
                  <label htmlFor='password' className='form__label'>
                    Password
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={firstName}
                    name='firstName'
                    onChange={handleChange}
                    placeholder='Name'
                  />
                  <label htmlFor='firstName' className='form__label'>
                    First Name
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={lastName}
                    name='lastName'
                    onChange={handleChange}
                    placeholder='Last Name'
                  />
                  <label htmlFor='lastName' className='form__label'>
                    Last Name
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={street}
                    name='street'
                    onChange={handleChange}
                    placeholder='55 Spot way'
                  />
                  <label htmlFor='street' className='form__label'>
                    Street Address
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={city}
                    name='city'
                    onChange={handleChange}
                    placeholder='RoverCity'
                  />
                  <label htmlFor='city' className='form__label'>
                    City
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={state}
                    name='state'
                    onChange={handleChange}
                    placeholder='Oregon'
                  />
                  <label htmlFor='state' className='form__label'>
                    State
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={zipcode}
                    name='zipcode'
                    onChange={handleChange}
                    placeholder='55555'
                  />
                  <label htmlFor='zipcode' className='form__label'>
                    Zipcode
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={dogName}
                    name='dogName'
                    onChange={handleChange}
                    placeholder='spot'
                  />
                  <label htmlFor='dogName' className='form__label'>
                    Dogs name
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    className='form__input'
                    value={breed}
                    name='breed'
                    onChange={handleChange}
                    placeholder='Dog Breed'
                  />
                  <label htmlFor='breed' className='form__label'>
                    Dog Breed
                  </label>
                </div>

                <div className='form__group bottom'>
                  <div className='form__radio-group'>
                    <h4 className='time'>
                      What time do you need your pup out?
                    </h4>
                    <input
                      className='form__radio-input'
                      type='radio'
                      name='timeNeeded'
                      value='6 till noon'
                      onChange={handleChange}
                    />
                    <label htmlFor='6 till noon' className='form__radio-label'>
                      <span className='form__radio-button'></span> 6am till Noon
                    </label>
                  </div>
                  <div className='form__radio-group'>
                    <input
                      className='form__radio-input'
                      type='radio'
                      name='timeNeeded'
                      value='noon till 6'
                      onChange={handleChange}
                    />
                    <label htmlFor='noon till 6' className='form__radio-label'>
                      <span className='form__radio-button'></span>Noon until 6pm
                    </label>
                  </div>
                  <div className='form__radio-group'>
                    <input
                      className='form__radio-input'
                      type='radio'
                      name='timeNeeded'
                      value='6 till midnight'
                      onChange={handleChange}
                    />
                    <label
                      htmlFor='6 till midnight'
                      className='form__radio-label'
                    >
                      <span className='form__radio-button'></span>6pm till
                      Midnight
                    </label>
                  </div>
                </div>

                <div className='form__radio-group'>
                  <h4 className='time'>
                    What time are you available for a pup?
                  </h4>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='timeAvailable'
                    value='6 till noon'
                    onChange={handleChange}
                  />
                  <label htmlFor='6 till noon' className='form__radio-label'>
                    <span className='form__radio-button'></span> 6am till Noon{' '}
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='timeAvailable'
                    value='noon till 6'
                    onChange={handleChange}
                  />
                  <label htmlFor='noon till 6' className='form__radio-label'>
                    <span className='form__radio-button'></span>Noon until 6pm
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='timeAvailable'
                    value='6 till midnight'
                    onChange={handleChange}
                  />
                  <label
                    htmlFor='6 till midnight'
                    className='form__radio-label'
                  >
                    <span className='form__radio-button'></span>6pm till
                    Midnight
                  </label>
                </div>

                <div className='form__radio-group'>
                  <h4 className='time'>What size is your dog?</h4>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='size'
                    value='XS'
                    onChange={handleChange}
                  />
                  <label htmlFor='XS' className='form__radio-label'>
                    <span className='form__radio-button'></span> XS
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='size'
                    value='S'
                    onChange={handleChange}
                  />
                  <label htmlFor='S' className='form__radio-label'>
                    <span className='form__radio-button'>S</span>
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='size'
                    value='M'
                    onChange={handleChange}
                  />
                  <label htmlFor='M' className='form__radio-label'>
                    <span className='form__radio-button'>M</span>
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='size'
                    value='L'
                    onChange={handleChange}
                  />
                  <label htmlFor='L' className='form__radio-label'>
                    <span className='form__radio-button'>L</span>
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    className='form__radio-input'
                    type='radio'
                    name='size'
                    value='XL'
                    onChange={handleChange}
                  />
                  <label htmlFor='XL' className='form__radio-label'>
                    <span className='form__radio-button'>XL</span>
                  </label>
                </div>

                <div className='form__group'>
                  <textarea
                    className='form__input'
                    name='userBio'
                    value={userBio}
                    onChange={handleChange}
                    placeholder='Tell us about you'
                  />
                  <label htmlFor='userBio' className='form__label'>
                    Tell us about yourself
                  </label>
                </div>
                <div className='form__group'>
                  <textarea
                    className='form__input'
                    name='dogBio'
                    value={dogBio}
                    onChange={handleChange}
                    placeholder='Tell us about your best friend'
                  />
                  <label htmlFor='dogBio' className='form__label'>
                    Tell us about yourself
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='file'
                    className='form__input'
                    onChange={handleChange}
                  />
                  <label htmlFor='userImage' className='form__label'>
                    Your Photo
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    type='file'
                    className='form__input'
                    onChange={handleChange}
                  />
                  <label htmlFor='dogImage' className='form__label'>
                    Dog Photo
                  </label>
                </div>

                <div className='form__group'>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
