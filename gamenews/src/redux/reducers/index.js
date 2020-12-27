import { combineReducers } from "redux";
import games from "./games";
import auth from '../reducers/users/auth';
import message from '../reducers/users/message';
import screenshots from '../reducers/screenshots'

export default combineReducers({
  games,
  auth,
  message,
  screenshots
});