import React from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import Nav from './nav/Nav';
import UserList from './user/UsersList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/zipcode/:zipcode' component={UserList} />
        <Route exact path='/' component={Home} />
      </Router>
    </>
  );
}
