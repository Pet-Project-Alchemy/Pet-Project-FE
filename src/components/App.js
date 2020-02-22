import React from 'react';
// import Signup from './signup/Signup';
import Home from './home/Home';
import Nav from './nav/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path='/' component={Home} />
        {/* <Signup /> */}
      </Router>
    </>
  );
}
