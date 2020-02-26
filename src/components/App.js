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
            <Route path='/messages/:id' component={Login} />
            <Route path='/zipcode/:zipcode' component={UserList} />
          </Switch>
        </SessionProvider>
      </Router>
    </>
  );
}
