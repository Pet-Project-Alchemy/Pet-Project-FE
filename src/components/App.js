import React from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import Nav from './nav/Nav';
import ProfilePage  from './profile/ProfilePage';
import UserList from './user/UsersList';
import PrivateRoute from '../components/private-public/PrivateRoute';
import { SessionProvider } from '../hooks/getAuth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExplorePage from '../components/testimonials/ExplorePage';
import Chat from './chat/Chat';
import AboutUs from './aboutUs/AboutUs';

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
            <Route path='/explore' component={ExplorePage} />
            <PrivateRoute path='/messages/:id' component={Chat} />
            <PrivateRoute path='/zipcode/:zipcode' component={UserList} />
            <PrivateRoute path='/chat/:receiverId' component={Chat} />
            <Route path='/about' component={AboutUs} />
          </Switch>
        </SessionProvider>
      </Router>
    </>
  );
}
