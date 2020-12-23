import {
  FETCH_NEWGAMES_SUCCESS,
  FETCH_TOPGAMES_SUCCESS,
  FETCH_SEARCHGAMES_SUCCESS,
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_ERROR
} from "../actions/games";

export const selectGames = (state) => state.games.collection.data;
export const selectGamesisLoading = (state) => state.games.collection.isLoading;
export const selectGamesErr = (state) => state.games.collection.err;

export const selectTopGames = (state) => state.games.collection.data;

export const selectSearchGames = (state) => state.games.collection.data;

export const selectNewGames = (state) => state.games.collection.data;

export const selectSingelGame = (state, id) => state.games[id] && state.games[id].data;
export const selectSingelGameisLoading = (state, id) => state.games[id] && state.games[id].isLoading;
export const selectSingelGameErr = (state, id) => state.games[id] && state.games[id].err;

const games = (state = {collection: {}}, action) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        collection: {
          ...state.collection, 
          isLoading: true 
        }
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        collection: {
          data: action.data,
          isLoading: false
        }
      };
    case FETCH_GAMES_ERROR:
      return { 
        ...state,
        collection:{
          err: action.err, 
          isLoading: false 
        }
      };
    case FETCH_TOPGAMES_SUCCESS:
      return {
        ...state,
        collection: {
          data: action.data,
          isLoading: false
        }
      };
    case FETCH_SEARCHGAMES_SUCCESS:
      return {
        ...state,
        collection: {
          data: action.data,
          isLoading: false
        }
      };  
    case FETCH_NEWGAMES_SUCCESS:
      return {
        ...state,
        collection: {
          data: action.data,
          isLoading: false
        }
      };
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
      return { 
        ...state, 
        [action.id]: {
           err: action.err, 
           isLoading: false 
        } 
      };
    default:
      return state;
  }
};

export default games;

