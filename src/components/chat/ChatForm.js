import React, { useState } from 'react';
import { useEmitEvent } from 'react-socket-io-hooks';
import { useSessionUser } from '../../hooks/getAuth';

export const ChatForm = () => {

  const [message, setMessage] = useState('');
  const user = useSessionUser();
  console.log('XXXXXXXXXXX', user);

  const sendMessage = useEmitEvent('sendMessage');
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
  };

  const handleChange = ({ target }) => {
    setMessage(target.value);
    console.log(target);
  };

  return (
    <form onSubmit={handleSubmit}  id="message-form">
      <label name="message">Message:</label>
      <input onChange={handleChange} value={message} type="text" name="message" required autoComplete="off"></input>
      <button id="submit">Send</button>
    </form>
  );

}; 


