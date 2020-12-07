import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR
} from "../actions/games";

const games = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case FETCH_GAMES_ERROR:
      return { err: action.err, isLoading: false };
    default:
      return state;
  }
};

export default games;