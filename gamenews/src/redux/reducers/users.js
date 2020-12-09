import { 
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR,
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_ERROR
} from '../actions/users';

export const selectUserList = (state) => state.users;
export const selectUserListisLoading = (state) => state.isLoading;
export const selectUserListErr = (state) => state.err;

const initialState = {
  users: [],
  isLoading: false,
  err: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        isLoading: false
      };
    case FETCH_USERS_ERROR:
      return { err: action.err, isLoading: false };
    case POST_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        users: action.data,
        isLoading: false
      };
    case POST_USER_ERROR:
      return { err: action.err, isLoading: false };
    case PUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case PUT_USER_SUCCESS:
      return {
        ...state,
        users: action.data,
        isLoading: false
      };
    case PUT_USER_ERROR:
      return { err: action.err, isLoading: false };
    default:
      return state;
  }
}

export default userReducer;