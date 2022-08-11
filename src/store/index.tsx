import { combineReducers } from "redux";
import navBar from './modules/navBar';

export default combineReducers({
  navBarReducer: navBar,

})