export const SET_USER = 'SET_USER';

export const addUser = ( user ) => {
  return {
    type: SET_USER,
    payload: user
  }

}

