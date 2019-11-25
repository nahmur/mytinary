import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itinaryReducer from "./itineraryReducer";
// const rootReducer = combineReducers({cities: citiesReducer}); //---cities es el estado que controlan
const rootReducer = combineReducers({
    cityReducer,
    itinaryReducer
});
export default rootReducer;