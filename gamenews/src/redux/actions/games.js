import axios from "axios";
var dayjs = require('dayjs')


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

export const fetchGames = (id) => async dispatch => {
  await dispatch({ type: FETCH_GAMES_REQUEST });
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?dates=${dayjs().subtract(6, 'M').format('YYYY-MM-DD')},${dayjs().add(6, 'M').format('YYYY-MM-DD')}&parent_platforms=${id}&ordering=-added${key}`
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
      `https://api.rawg.io/api/games?dates=${dayjs().subtract(25, 'y').format('YYYY-MM-DD')},${dayjs().format('YYYY-MM-DD')}&ordering=-rating${key}`);
    return dispatch({
      type: FETCH_TOPGAMES_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    return dispatch({ type: FETCH_GAMES_ERROR, err,  });
  }
};

export const FETCH_NEWGAMES_SUCCESS = "FETCH_NEWGAMES_SUCCESS";

export const fetchNewGames = () => async dispatch => {
  await dispatch({ type: FETCH_GAMES_REQUEST,});
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?dates=${dayjs().subtract(2, 'M').format('YYYY-MM-DD')},${dayjs().add(2, 'M').format('YYYY-MM-DD')}&ordering=-added${key}`);
    return dispatch({
      type: FETCH_NEWGAMES_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    return dispatch({ type: FETCH_GAMES_ERROR, err,  });
  }
};

