import React from 'react';
import { SocketProvider } from 'react-socket-io-hooks';
import Messages from './Messages'; 
import { ChatForm } from './ChatForm';

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

const Chat = () => {
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
