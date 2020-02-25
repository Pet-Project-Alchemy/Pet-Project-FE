import React, { useState } from 'react';
import io from 'socket.io-client';
import { SocketProvider } from 'react-socket-io-hooks';
import Messages from './Messages'; 

const reducer = (state, action) => {
  switch(action.type){
    case 'message':
      return [...state, action.payload];
    default: 
      return state;
  }
};

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:7890');

  socket.on('connection', (socket) => {
    socket.on('hi', (data) => {
    });
  });
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    socket.emit('message', (message) => {
      setMessages(message);
    });
  };

  return (
    <SocketProvider uri="http://localhost:7891" 
      reducer={reducer}
      initialState ={{ messages:[{
        senderId:'123',
        receiverId:'432',
        text:'hellop',
        url:'www.'
      }] }} >
      <form onSubmit={onSubmit} onChange={onChange} id="message-form">
        <label name="message">Message:</label>
        <input value={message} type="text" name="message" required autoComplete="off"></input>
        <button id="submit">Send</button>
      </form>
      <Messages />
    </SocketProvider>
  );
};

export default Chat;
