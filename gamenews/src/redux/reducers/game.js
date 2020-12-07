import {
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_ERROR
} from "../actions/games";

const game = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GAME_REQUEST:
      return {
        ...state,
        [action.id]: { ...state[action.id], isLoading: true }
      };
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          data: action.data,
          isLoading: false
        }
      };
    case FETCH_GAME_ERROR:
      return { ...state, [action.id]: { err: action.err, isLoading: false } };
    default:
      return state;
  }
};

export default game;