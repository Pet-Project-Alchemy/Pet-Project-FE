import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

const HistoryItem = ({ history }) => {
  return (
    <li>
      <Link to={`/chat/${history._id}`}>{history.userName}</Link>
=======
const HistoryItem = ({ history }) => {
  return (
    <li>
      <Link to={`/chat/${history._id}`} className='historyLink'>{history.userName}</Link>
>>>>>>> 9ca732c1f894443ba762ab2fee09bb42e2819cc7
    </li>
  );
};
export default HistoryItem;
