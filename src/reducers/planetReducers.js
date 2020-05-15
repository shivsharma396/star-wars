import { planetActionTypes } from "../actions/planetActions";

const PlanetReducers = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case planetActionTypes.SET_PLANET:
      return {
        ...state,
        planetList: data
      };
    default:
      return state;
  }
};

export default PlanetReducers;
