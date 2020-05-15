import Constants from "../apis/constants";
import Helpers from "../apis/helpers";

class PlanetServices {
  searchPlanet = async payload => {
    const { searchText } = payload;
    const result = await Helpers.get({
      url: `${Constants.SEARCH_PLANET}${searchText}`
    });
    const { results: planetList = [] } = result;
    return planetList;
  };
}

export default new PlanetServices();
