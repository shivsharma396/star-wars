import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import planetSaga from "./planetSaga";

export default function* rootSaga() {
  yield all([userSaga(), planetSaga()]);
}
