import React, { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem';
import './HistoryList.scss';
import { useSocketState } from 'react-socket-io-hooks';
import { getConversations } from '../../service/fetchMessages';
export const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    getConversations().then(conversations => {
      setHistories(conversations);
    });
  }, []);
  const historyArray = histories.map(history => {
    return <HistoryItem key={history._id} history={history} />;
  });
  return (
    <>
      <div className='ulDiv'>
        <ul className='historyUl'>{historyArray}</ul>
      </div>
    </>
  );
};
