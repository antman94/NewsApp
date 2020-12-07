import { combineReducers } from "redux";
import games from "./games";
import game from "./game";

export default combineReducers({
  games,
  game
});