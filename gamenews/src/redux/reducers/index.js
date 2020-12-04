const defaultState = { name: 'Kalle' };

function reducer( state = defaultState, action ) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}

export default reducer;