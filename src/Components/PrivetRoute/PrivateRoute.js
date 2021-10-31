import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseContex from '../../Contextapi/UseContext';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoding}=UseContex();
    if(isLoding){
       <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;