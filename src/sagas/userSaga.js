import { put, takeLatest, all } from "redux-saga/effects";
import UserServices from "../services/userServices";
import UserActions, { userActionTypes } from "../actions/userActions";

function* _authenticateUser(action) {
  const { userName, password } = action.data;
  const userDetails = yield UserServices.searchPeople({ searchText: userName });
  if (
    userDetails.length === 1 &&
    userDetails[0].name === userName &&
    userDetails[0].birth_year.trim() === password
  ) {
    yield put(UserActions.setAuthenticationDetail(userDetails[0]));
  }
}

function* authenticateUser() {
  yield takeLatest(userActionTypes.AUTHENTICATE_USER, _authenticateUser);
}

export default function* userSaga() {
  yield all([authenticateUser()]);
}
