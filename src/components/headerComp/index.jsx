import React, { Component } from "react";
import UserActions from "../../actions/userActions";
import { connect } from "react-redux";
import './style.scss';

class HeaderComp extends Component {
  render() {
    const { userName, logout } = this.props;
    return (
      <div className='header-container'>
        <span>{userName}</span>
        <button className='logout-btn' type='button' onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ UserReducers }) => {
  return {
    userName: UserReducers.userDetail.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(UserActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);
