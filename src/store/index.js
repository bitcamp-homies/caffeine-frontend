import { combineReducers } from "redux";
import colorPicker from "./modules/color";
import reducer from "./modules/mapMarker";


export default combineReducers({
  colorReducer : colorPicker,
  mainMarkerReducer : reducer
})