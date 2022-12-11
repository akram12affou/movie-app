import { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const MovieContext = createContext(initialState);

export const MoiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const addToFav = (favoriteList) => {
       dispatch({
          type: "ADD_TO_favoriteList",
           payload: {
            favoriteList,
           }
       });
       };
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
    addToFav,
    setMovieList
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


// const addToCart = (product) => {
//     const updatedCart = state.products.concat(product);
//     updatePrice(updatedCart);
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: {
//         products: updatedCart
//       }
//     });
//   };

//   const removeFromCart = (product) => {
//     const updatedCart = state.products.filter(
//       (currentProduct) => currentProduct.name !== product.name
//     );
//     updatePrice(updatedCart);

//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: {
//         products: updatedCart
//       }
//     });
//   };

//   const updatePrice = (products) => {
//     let total = 0;
//     products.forEach((product) => (total += product.price));

//     dispatch({
//       type: "UPDATE_PRICE",
//       payload: {
//         total
//       }
//     });
//   };
