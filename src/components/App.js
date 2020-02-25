import React from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import Nav from './nav/Nav';
import UserList from './user/UsersList';
import Testimonials from './testimonials/Testimonials';
import { SessionProvider } from '../hooks/getAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <SessionProvider>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/explore' component={Testimonials} />
          <Route path='/login' component={Login} />
          <Route path='/zipcode/:zipcode' component={UserList} />
        </SessionProvider>
      </Router>
    </>
  );
}
