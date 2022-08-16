import { combineReducers } from "redux";
import navBar from './modules/navBar';
import counter from './modules/count';

export default combineReducers({
  navBarReducer: navBar,
  counter,
})