import React from 'react';
import './message.scss';
const Message = ({ senderId, sender, receiverId, text, senderImage }) => {
  return (
    <>
      <div className='messageOutput'>
        <p className={senderId !== sender._id ? 'white' : 'red'}><span className='spanImage'></span>{text}<span></span></p>
      </div>
    </>
  );
};
export default Message;
