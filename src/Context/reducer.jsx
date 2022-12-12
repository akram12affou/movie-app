export const initialState = {
    favoriteList: JSON.parse(window.localStorage.getItem('favorite')) ? JSON.parse(window.localStorage.getItem('favorite')) : []   ,
    WatchedList: JSON.parse(window.localStorage.getItem('watched')) ? JSON.parse(window.localStorage.getItem('watched')) : []  ,
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
        case "DELETE_FROM_FAVORITE":
          let favorite_list = []
          for (let i=0;i<state.favoriteList.length;i++){
            if(i!==payload.index){
              favorite_list.push(state.favoriteList[i])
            }
          }
          return{
              ...state,
              favoriteList: favorite_list
          }

        case "DELETE_FROM_WATCHED":
          console.log(payload.id,state.WatchedList[payload.id])
          let watched_list = []
          for (let i=0;i<state.WatchedList.length;i++){
            if(i!==payload.id){
             watched_list.push(state.WatchedList[i])
            }
          }
        return{
            ...state,
            WatchedList: watched_list
        }
        case "ADD_TO_FAVORITE":
          for(let i = 0 ;state.favoriteList.length > i;i++){
            if(state.favoriteList[i].title == payload.title ){
              alert('already')
              return {
                ...state,
              }
            }
          }
        return {
          ...state,
          favoriteList: [...state.favoriteList ,{title :  payload.title}]
        };
      case "ADD_TO_WATCHED":
        for(let i = 0 ;state.WatchedList.length > i;i++){
          if(state.WatchedList[i].title == payload.watched ){
            alert('already')
            return {
              ...state,
            }
          }
        }
        return {
          ...state,
          WatchedList: [...state.WatchedList , {title : payload.watched,  disabled : false}]
        };
      default:
        throw new Error(`No case for type ${type} found in shopReducer.`);
    }
  };
  
  export default reducer;
  