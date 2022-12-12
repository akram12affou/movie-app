import { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const MovieContext = createContext(initialState);

export const MoiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const addToWatched = (watched) => {
       dispatch({
          type: "ADD_TO_WATCHED",
           payload: {
            watched,
           }
       });
       };
       const addToFavorite = (title) => {
        dispatch({
           type: "ADD_TO_FAVORITE",
            payload: {
              title,
            }
        });
        };

      const deleteFromWatched = (id) => {
        dispatch({
          type: "DELETE_FROM_WATCHED",
           payload: {
            id,
           }
       });
      }
      const deleteFromfavorite = (index) => {
        dispatch({
          type: "DELETE_FROM_FAVORITE",
           payload: {
            index,
           }
       });
      }
       const setMovieList = (List) => {
        dispatch({
           type: "SET_MOVIE_LIST",
            payload: {
                List,
            }
        });
        };


  const value = {
    favoriteList: state.favoriteList,
    WatchedList: state.WatchedList,
    MovieList: state.MovieList,
    //functions
    addToWatched,
    setMovieList,
    deleteFromWatched,
    addToFavorite,
    deleteFromfavorite
  };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

const useMovie = () => {
  const context = useContext(MovieContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useMovie;
