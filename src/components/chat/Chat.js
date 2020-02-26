import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { SocketProvider, useSocketState } from 'react-socket-io-hooks';
import Messages from './Messages'; 
import { ChatForm } from './ChatForm';
import { useSessionUser } from '../../hooks/getAuth';
import { getMessages } from '../../service/fetchMessages'; 

const reducer = (state, action) => {
    
  switch(action.type){
    case 'message':
      return [...state, action.payload];
    case 'messages':
      return action.payload;
    default: 
      return state;
  }
};

const Chat = ({ match }) => {

  const user = useSessionUser();
  console.log('XXXXXXXXXXX', user);
    
  return (
    <SocketProvider uri="http://localhost:7890" 
      reducer={reducer}
      initialState={[]} >
      <ChatForm />
      <Messages />
    </SocketProvider>
  );
};

export default Chat;
