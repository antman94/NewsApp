import axios from "axios";

const key = "?key=60383a7e59fe4b4b98d9f33f6e5edbbd"

export const FETCH_GAME_REQUEST = "FETCH_GAME_REQUEST";
export const FETCH_GAME_SUCCESS = "FETCH_GAME_SUCCESS";
export const FETCH_GAME_ERROR = "FETCH_GAME_ERROR";

export const fetchGame = (id) => async dispatch => {
  await dispatch({ type: FETCH_GAME_REQUEST, id });
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?page_size=40${key}`    );
    return dispatch({
      type: FETCH_GAME_SUCCESS,
      data: response.data,
      id
    });
  } catch (err) {
    return dispatch({ type: FETCH_GAME_ERROR, err, id });
  }
};

export const FETCH_GAMES_REQUEST = "FETCH_GAMES_REQUEST";
export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
export const FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR";

export const fetchGames = () => async dispatch => {
  await dispatch({ type: FETCH_GAMES_REQUEST });
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?dates=2020-06-10,2021-12-12&ordering=-added${key}`
    );
    return dispatch({
      type: FETCH_GAMES_SUCCESS,
      data: response.data
    });
  } catch (err) {
    return dispatch({ type: FETCH_GAMES_ERROR, err });
  }
};


export const FETCH_TOPGAMES_SUCCESS = "FETCH_TOPGAMES_SUCCESS";

export const fetchTopGames = () => async dispatch => {
  await dispatch({ type: FETCH_GAMES_REQUEST,});
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?dates=1990-01-01,2020-12-31&ordering=-rating${key}`);
    return dispatch({
      type: FETCH_TOPGAMES_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    return dispatch({ type: FETCH_GAMES_ERROR, err,  });
  }
};

export const FETCH_NEWGAMES_SUCCESS = "FETCH_TOPGAMES_SUCCESS";

export const fetchNewGames = () => async dispatch => {
  await dispatch({ type: FETCH_GAMES_REQUEST,});
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?dates=2020-12-01,2021-02-01&ordering=-added${key}`);
    return dispatch({
      type: FETCH_NEWGAMES_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    return dispatch({ type: FETCH_GAMES_ERROR, err,  });
  }
};