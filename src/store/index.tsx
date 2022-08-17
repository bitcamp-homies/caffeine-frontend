//@ts-nocheck

import { combineReducers } from "redux";
import reducer from "./modules/mapMarker";
import locationReducer from "./modules/userLocation";

export default combineReducers({
  mainMarkerReducer : reducer,
  locationReducer
})