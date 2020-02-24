import React from 'react';
import Signup from './signup/Signup';
import Home from './home/Home';
import Nav from './nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route path='/signup' component={Signup} />
        <Route exact path='/' component={Home} />
      </Router>
    </>
  );
}
