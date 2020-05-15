import { userActionTypes } from "../actions/userActions";

const UserReducers = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case userActionTypes.SET_USER_LOGGED_IN:
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userDetail", JSON.stringify(data));
      return {
        ...state,
        isAuthenticated: true,
        userDetail: data
      };
    case userActionTypes.LOCAL_AUTHENTICATION:
      let isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      let userDetail = localStorage.getItem("userDetail");
      userDetail = userDetail ? JSON.parse(userDetail) : null;
      return {
        ...state,
        isAuthenticated,
        userDetail: userDetail 
      };
      case userActionTypes.LOGOUT:
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userDetail");
      return {
        isAuthenticated: false,
        userDetail: null
      };
    default:
      return state;
  }
};

export default UserReducers;
