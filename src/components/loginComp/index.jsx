import React, { Component } from "react";
import { connect } from "react-redux";
import UserActions from "../../actions/userActions";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./style.scss";

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  login = () => {
    const { authenticateUser } = this.props;
    const { userName, password } = this.state;
    authenticateUser({ userName, password });
  };

  render() {
    const { isAuthenticated = false } = this.props;
    const { userName, password } = this.state;
    return isAuthenticated ? (
      <Redirect to='/' />
    ) : (
      <div className='login-wrapper'>
        <div className='form-wrapper'>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type='email'
                placeholder='Enter username'
                value={userName}
                onChange={e => this.setState({ userName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Group>
            <Button variant='danger' type='button' onClick={this.login}>
              Login
            </Button>
          </Form>
        </div>
      </div>
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
    authenticateUser: payload => dispatch(UserActions.authenticateUser(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComp);
