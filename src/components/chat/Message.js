import React from 'react';

const Message = ({ senderId, text, url }) => {

  // turn id into actual name
    
 
  return (
    <div>
      <p>{senderId}</p>
      <p>{text}</p>
      <p>{url}</p>
    </div>
  );
}
;
export default Message;
