import axios from 'axios';

const apiUrl = 'http://localhost:4000/user';

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const fetchUsers = () => async dispatch => {
  await dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await axios.get(`${apiUrl}`);
    return dispatch({
      type: FETCH_USERS_SUCCESS,
      data: response.data
    });
  } catch (err) {
    return dispatch({ type: FETCH_USERS_ERROR, err });
  }
};

export const POST_USER_REQUEST = "POST_USER_REQUEST";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_ERROR = "POST_USER_ERROR";

export const createUser = ( body ) => async dispatch => {
  await dispatch({ type: POST_USER_REQUEST });
  try {
    const response = await axios.post(`${apiUrl}`, body);
    return dispatch({
      type: POST_USER_SUCCESS,
      data: {
        username: response.data.username,
        password: response.data.password,
        gamesWishList: [response.data.gamesWishList]
      }
    });
  }catch (err) {
    return dispatch({ type: POST_USER_ERROR, err });
  }
};

export const PUT_USER_REQUEST = "PUT_USER_REQUEST";
export const PUT_USER_SUCCESS = "PUT_USER_SUCCESS";
export const PUT_USER_ERROR = "PUT_USER_ERROR";

export const changeUser = (id, body ) => async dispatch => {
  await dispatch({ type: PUT_USER_REQUEST, id });
  try {
    const response = await axios.put(`${apiUrl}/${id}`, body);
    return dispatch({
      type: PUT_USER_SUCCESS,
      data: {
        username: response.data.username,
        password: response.data.password,
        gamesWishList: [response.data.gamesWishList]
      },
      id
    });
  }catch (err) {
    return dispatch({ type: PUT_USER_ERROR, err });
  }
};
   

