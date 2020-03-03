import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import { useHasSession, useSessionLoading } from '../../hooks/getAuth';

const PrivateRoute = ({ component, path }) => {
  const history = useHistory();
  const authenticated = useHasSession();
  const loading = useSessionLoading();

  if(!authenticated && !loading) {
    history.push('/signup');
  }
  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};

export default PrivateRoute;
