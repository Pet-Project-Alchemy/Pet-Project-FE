import React from 'react';
import './HistoryItem.scss';
import { Link } from 'react-router-dom';
const HistoryItem = ({ history }) => {
  return (
    <li className='historyLinksLi'>
      <Link to={`/chat/${history._id}`} className='historyLink'>{history.userName}</Link>
    </li>
  );
};
export default HistoryItem;
