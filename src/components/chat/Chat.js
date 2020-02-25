import React, { useState } from 'react';
import io from 'socket.io-client';
import { SocketProvider } from 'react-socket-io-hooks';
import Messages from './Messages'; 
import { ChatForm } from './ChatForm';

const reducer = (state, action) => {
  switch(action.type){
    case 'message':
      return [...state, action.payload];
    default: 
      return state;
  }
};

const Chat = () => {

  return (
    <SocketProvider uri="http://localhost:7890" 
      reducer={reducer}
      initialState ={{ messages:[] }} >
      <ChatForm />
      <Messages />
    </SocketProvider>
  );
};

export default Chat;
