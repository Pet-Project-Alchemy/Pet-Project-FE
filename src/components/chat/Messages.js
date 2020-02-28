import React, { useEffect } from 'react';
import { useSocketState, useEmitEvent } from 'react-socket-io-hooks';
import Message from './Message';
import './Messages.scss';
import { useSessionUser } from '../../hooks/getAuth';
import { useParams } from 'react-router-dom';
import { useSocket } from 'react-socket-io-hooks';
const Messages = () => {
  const socket = useSocket();
  const messages = useSocketState();
  const sender = useSessionUser();
  const sender = useSessionUser();
  const { receiverId } = useParams();
  const join = useEmitEvent('join');
  useEffect(() => {
    if (socket.connected !== undefined && sender)
      join({ senderId: sender._id, receiverId });
  }, [socket.connected, sender]);
  const messagesArray = messages.map(message => {
    return (
      <Message
        key={message.message}
        senderId={message.senderId}
        sender={sender}
        receiverId={receiverId}
        text={message.text}
        url={message.url}
      />
    );
  });
  return (
    <div className='message__container'>
      <div className='messageArray'>
        <p className='messageParagraph'>{messagesArray}</p>
      </div>
    </div>
  );
};
export default Messages;
