import React from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import Nav from './nav/Nav';
import UserList from './user/UsersList';

import PrivateRoute from '../components/private-public/PrivateRoute';
import { SessionProvider } from '../hooks/getAuth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExplorePage from '../components/testimonials/ExplorePage';
import Chat from './chat/Chat';
import About from './aboutUs/AboutUs';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <SessionProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/explore' component={ExplorePage} />
            <Route path='/messages/:id' component={Chat} />
            <Route path='/zipcode/:zipcode' component={UserList} />
            <Route path='/chat/:receiverId' component={Chat} />
            <Route path='/about' component={About} />
          </Switch>
        </SessionProvider>
      </Router>
    </>
  );
}
