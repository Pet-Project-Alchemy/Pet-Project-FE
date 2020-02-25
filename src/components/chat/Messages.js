import React from 'react';
import { useSocketState } from 'react-socket-io-hooks';
import Message from './Message';

const Messages = () => {
  const state = useSocketState();
  console.log(state);
  const messagesArray = state.messages.map(message => {
    return <Message 
      key={message.message}
      senderId={message.senderId}
      text={message.text} 
      url={message.url} />;
  });

  return (
    <div>
      <p>{messagesArray}</p>
    </div>
  );
};
export default Messages;

