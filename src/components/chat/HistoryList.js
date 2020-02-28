import React, { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem';
import { useSocketState } from 'react-socket-io-hooks';
import { getConversations } from '../../service/fetchMessages';
export const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
<<<<<<< HEAD
    getConversations()
      .then(conversations => {
        setHistories(conversations);
      });
  }, []);
  const historyArray = histories.map(history => {
    
    return <HistoryItem 
      key={history._id}
      history={history}
    />;
  });
  return (
    <ul>{historyArray}</ul>
  );
=======
    getConversations().then(conversations => {
      setHistories(conversations);
    });
  }, []);
  const historyArray = histories.map(history => {
    return <HistoryItem key={history._id} history={history} />;
  });
  return <ul className='historyUl'>{historyArray}</ul>;
>>>>>>> 9ca732c1f894443ba762ab2fee09bb42e2819cc7
};
