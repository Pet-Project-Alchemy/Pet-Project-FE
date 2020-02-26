import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { SessionProvider } from './hooks/getAuth';

render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById('root')
);
