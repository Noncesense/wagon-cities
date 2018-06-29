export default function(state, action) {
  if (state === undefined) {
    return null
  }
  // handle actions
  if(action.type === 'SET_ACTIVE_CITY') {
    return action.payload;
  } else {
    return state;
  }

}
