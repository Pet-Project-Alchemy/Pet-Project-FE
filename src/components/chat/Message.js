import React from 'react';

const Message = ({ senderId, sender, receiverId, text }) => {
 
  return (
    <div>
      {/* <img src={image} /> */}
      <p className={senderId !== sender._id ? 'white' : 'red'}>{text}</p>
    </div>
  );
};
export default Message;
