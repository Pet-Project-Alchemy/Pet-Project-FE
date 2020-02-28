import React, { useState } from 'react';
import { useEditUser } from '../../hooks/getAuth';
import '../signup/Signup.scss';

export default function EditForm({ match }) {
  const edit = useEditUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timeNeeded, setTimeNeeded] = useState('');
  const [timeAvailable, setTimeAvailable] = useState('');
  const [userBio, setUserBio] = useState('');

  const [dogName, setDogName] = useState('');
  const [dogSize, setDogSize] = useState('');
  const [breed, setBreed] = useState('');
  const [dogBio, setDogBio] = useState('');

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
    dogName: setDogName,
    dogSize: setDogSize,
    breed: setBreed,
    dogBio: setDogBio,
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
    edit(match.params.id, {
      email,
      password,
      firstName,
      timeNeeded,
      lastName,
      timeAvailable,
      userBio,
      street,
      city,
      state,
      zipcode,
      dogName,
      dogSize,
      breed,
      dogBio,
    });
  };
  return (
    <>
      <section className='section-signup'>
        <div className='grid'>
          <div className='signup'>
            <div className='signup__form'>
              <form onSubmit={handleSubmit} className='form'>
                <div className='title'>
                  <h2 className='heading'>Edit Your Profile</h2>
                </div>
                <div className='form__group'>
                  <input
                    type='email'
                    aria-label='email'
                    aria-required='true'
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
                    aria-label='password'
                    aria-required='true'
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
                <div className='form__group'>
                  <label htmlFor='timeNeeded'></label>
                  <select
                    className='form__select'
                    name='timeNeeded'
                    onChange={handleChange}
                    placeholder='Pick time'
                  >
                    <option value='6am till noon'>6am till noon</option>
                    <option value='noon til 6pm'>noon til 6pm</option>
                    <option value='noon til 6pm'>noon til 6pm</option>
                  </select>
                </div>
                <div className='form__group'>
                  <label htmlFor='timeAvailable'></label>
                  <select
                    className='form__select'
                    name='timeAvailable'
                    onChange={handleChange}
                    placeholder='Pick time'
                  >
                    <option value='6am till noon'>6am till noon</option>
                    <option value='noon til 6pm'>noon til 6pm</option>
                    <option value='noon til 6pm'>noon til 6pm</option>
                  </select>
                </div>

                <div className='form__group'>
                  <label htmlFor='dogSize'></label>
                  <select
                    className='form__select'
                    name='dogSize'
                    onChange={handleChange}
                    placeholder='Pick time'
                  >
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                  </select>
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
                    Tell us about best friend
                  </label>
                </div>
                <div className='form__group'>
                  <button className='submit' >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
