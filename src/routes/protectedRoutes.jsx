import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log("ProtectedRoute isAuthenticated ---", isAuthenticated);
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

const mapStateToProps = ({ UserReducers }) => ({
  isAuthenticated: UserReducers.isAuthenticated
});

ProtectedRoute.propTypes = {
  component: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps)(ProtectedRoute);
