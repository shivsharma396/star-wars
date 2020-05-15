import Constants from "../apis/constants";
import Helpers from "../apis/helpers";

class UserServices {
  searchPeople = async payload => {
    const { searchText } = payload;
    const result = await Helpers.get({
      url: `${Constants.SEARCH_PEOPLE}${searchText}`
    });
    const { results: peopleList = [] } = result;
    return peopleList;
  };
}

export default new UserServices();
