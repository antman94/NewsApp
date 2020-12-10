import { combineReducers } from "redux";
import games from "./games";
import users from "./users"

export default combineReducers({
  games,
  users
});