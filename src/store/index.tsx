//@ts-nocheck

import { combineReducers } from "redux";
import reducer from "./modules/mapMarker";

export default combineReducers({
  mainMarkerReducer : reducer
})