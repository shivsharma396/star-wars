import { put, all, takeLatest } from "redux-saga/effects";
import PlanetActions, { planetActionTypes } from "../actions/planetActions";
import PlanetServices from "../services/planetServices";

function* _searchPlanet(action) {
  const { data } = action;
  const result = yield PlanetServices.searchPlanet({ searchText: data });
  yield put(PlanetActions.setPlanet(result));
}

function* searchPlanet() {
  yield takeLatest(planetActionTypes.SEARCH_PLANET, _searchPlanet);
}

export default function* planetSaga() {
  yield all([searchPlanet()]);
}
