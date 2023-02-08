const initialState = {
    WatchedList:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'first':
    return { ...state,WatchedList:[...state.WatchedList , payload] }

  default:
    return state
  }
}
