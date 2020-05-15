import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "../src/routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import UserActions from "./actions/userActions";
import ProtectedRoute from "./routes/protectedRoutes";
import HeaderComp from "./components/headerComp";

class App extends Component {
  componentDidMount() {
    const { isAuthenticated, getUserAuthenticationDetail } = this.props;
    if (!isAuthenticated) {
      getUserAuthenticationDetail();
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    const routesHtml = Routes.map(({ path, exact, component, isPrivate }) => {
      return isPrivate ? (
        <ProtectedRoute key={path} path={path} exact={exact} component={component} />
      ) : (
        <Route key={path} path={path} exact={exact} component={component} />
      );
    });
    return (
      <Suspense fallback='Loading'>
        {isAuthenticated ? <HeaderComp /> : null}
        <Switch>{routesHtml}</Switch>
      </Suspense>
    );
  }
}

const mapStateToProps = ({ UserReducers }) => {
  return {
    isAuthenticated: UserReducers.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserAuthenticationDetail: () => dispatch(UserActions.getUserAuthenticationDetail())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
