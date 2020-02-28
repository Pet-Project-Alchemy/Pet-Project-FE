import React from 'react';
import { Link } from 'react-router-dom';

const HistoryItem = ({ history }) => {
  return (
    <li>
      <Link to={`/chat/${history._id}`}>{history.userName}</Link>
    </li>
  );
};
export default HistoryItem;
