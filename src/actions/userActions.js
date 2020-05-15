export const userActionTypes = {
  SET_USER_LOGGED_IN: "Set Authenticated Details",
  AUTHENTICATE_USER: "Authenticate user",
  LOCAL_AUTHENTICATION: "Authenticate From Local Storage",
  LOGOUT: "Logout",
};

class UserAction {

  getUserAuthenticationDetail(payload){
    return {
      type: userActionTypes.LOCAL_AUTHENTICATION
    }
  }

  setAuthenticationDetail(payload) {
    return {
      type: userActionTypes.SET_USER_LOGGED_IN,
      data: payload
    };
  }

  authenticateUser(payload) {
    return {
      type: userActionTypes.AUTHENTICATE_USER,
      data: payload
    };
  }

  logout() {
    return {
      type: userActionTypes.LOGOUT
    };
  }
}

export default new UserAction();
