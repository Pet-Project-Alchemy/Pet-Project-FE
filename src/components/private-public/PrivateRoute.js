import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { useHasSession } from '../../hooks/getAuth';

const PrivateRoute = ({ component, path }) => {
  const authenticated = useHasSession();
  const location = useLocation();
  //   const history = useHistory();

  if (!authenticated) {
    // history.replace(`/auth?redirect=${location.pathname}`);
    console.log('hiii');
  }

  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};

export default PrivateRoute;
