import React from 'react';
import { SocketProvider } from 'react-socket-io-hooks';
import Messages from './Messages'; 
import { ChatForm } from './ChatForm';
import { HistoryList } from './HistoryList';

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
    <SocketProvider uri="https://pet-project-be.herokuapp.com" 
      reducer={reducer}
      initialState={[]} >
      <Messages />
      <ChatForm />
      <HistoryList /> 
    </SocketProvider>
  );
};
export default Chat;
