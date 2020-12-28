import {
  FETCH_SCREENSHOTS_REQUEST,
  FETCH_SCREENSHOTS_SUCCESS,
  FETCH_SCREENSHOTS_ERROR,

} from "../actions/games";

export const gameScreenshots = (state, id) => state.screenshots[id] && state.screenshots[id].data;
export const screenshotsLoading = (state, id) => state.screenshots[id] && state.screenshots[id].isLoading;
export const screenshotsErr = (state, id) => state.screenshots[id] && state.screenshots[id].err;

const screenshots = (state = {collection: {}}, action) => {
  switch (action.type) {
    case FETCH_SCREENSHOTS_REQUEST:
      return {
        ...state,
        [action.id]: { ...state[action.id], isLoading: true }
      };
    case FETCH_SCREENSHOTS_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          data: action.data,
          isLoading: false
        }
      };
    case FETCH_SCREENSHOTS_ERROR:
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

export default screenshots;