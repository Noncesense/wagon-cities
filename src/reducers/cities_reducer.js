export default function(state, action) {
  if (state === undefined) {
    return []
  }
  // handle actions
  if(action.type === 'SET_CITIES') {
    return action.payload;
  } else {
    return state;
  }

}
