//@ts-nocheck

import { combineReducers } from "redux";
import reducer from "./modules/mapMarker";
import locationReducer from "./modules/userLocation";
import cafeListBoundaryReducer from "./modules/cafeListBoundary";

export default combineReducers({
  reducer
})