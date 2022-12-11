export const initialState = {
    favoriteList: [],
    WatchedList: [],
    MovieList :[]
  };
  
  const reducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "SET_MOVIE_LIST":
        return{
            ...state,
            MovieList: payload.List
        }
       
      case "ADD_TO_favoriteList":
        return {
          ...state,
          favoriteList: [...state.favoriteList , payload.favoriteList]
        };
      default:
        throw new Error(`No case for type ${type} found in shopReducer.`);
    }
  };
  
  export default reducer;
  