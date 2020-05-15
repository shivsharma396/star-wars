import { combineReducers } from "redux";
import UserReducers from "./userReducers";
import PlanetReducers from "./planetReducers";

const AppReducer = combineReducers({ UserReducers, PlanetReducers });

const RootReducer = (existingState, action) => AppReducer(existingState, action);

export default RootReducer;
