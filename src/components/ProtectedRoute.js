import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Custom ProtectedRoute component
function ProtectedRoute({ component: Component, isLoggedIn, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          // If the user is logged in, render the specified component
          <Component currentUser={currentUser} {...props} />
        ) : (
          // If the user is not logged in, redirect to the login page
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
