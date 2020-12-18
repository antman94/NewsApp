import { combineReducers } from "redux";
import games from "./games";
import auth from '../reducers/users/auth';
import message from '../reducers/users/message';

export default combineReducers({
  games,
  auth,
  message
});