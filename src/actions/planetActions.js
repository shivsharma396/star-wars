export const planetActionTypes = {
  SEARCH_PLANET: "Search Planet",
  SET_PLANET: "Set Planet List"
};

class PlanetActions {
  searchPlanet(payload) {
    return {
      type: planetActionTypes.SEARCH_PLANET,
      data: payload
    };
  }

  setPlanet(payload) {
    return {
      type: planetActionTypes.SET_PLANET,
      data: payload
    };
  }
}

export default new PlanetActions();
