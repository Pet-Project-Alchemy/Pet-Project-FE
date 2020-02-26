import React, { useEffect } from 'react';
import { useSocketState, useEmitEvent } from 'react-socket-io-hooks';
import Message from './Message';
import { useSessionUser } from '../../hooks/getAuth';
import { useParams } from 'react-router-dom';
import { useSocket } from 'react-socket-io-hooks';

const Messages = () => {
  const socket = useSocket();
  const messages = useSocketState();
  const sender = useSessionUser();
  console.log(messages);
  const { receiverId } = useParams();
  const join = useEmitEvent('join');

  useEffect(() => {
    console.log('joining', socket, sender);
    if(socket.connected !== undefined && sender) join({ senderId: sender._id, receiverId });
  }, [socket.connected, sender]);

  const messagesArray = messages.map(message => {

    console.log(message);

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

