import React, { useEffect } from 'react';
import { useSocketState, useEmitEvent } from 'react-socket-io-hooks';
import Message from './Message';
import { useSessionUser } from '../../hooks/getAuth';
import { useParams } from 'react-router-dom';
import { useSocket } from 'react-socket-io-hooks';

const Messages = () => {
    const socket = useSocket();
  const state = useSocketState();
  const senderId = useSessionUser();
  //   const { receiverId } = useParams();
  const receiverId = senderId;
  const join = useEmitEvent('join');
  useEffect(() => {
    if(socket.connected) join({ senderId, receiverId });
  }, [socket.connected]);
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

