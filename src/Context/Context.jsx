import { useContext, createContext, useReducer, useEffect } from "react";
import api from "../api/api";
import axios from "axios";
import reducer from "../Reducer/reducer";
const BooksContext = createContext();

export const useBooks = () => {
  return useContext(BooksContext);
};

const initialState = {
  services: [],
  products:[],
};

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to get api data
  const getBookData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res;
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  // to call the api
  useEffect(() => {
    getBookData(api);
  }, []);

  // add to cart
 
  const addToCart = (product) => {
   const updatedCart = state.products.concat(product);
   dispatch({
    type:"ADD_TO_CART",
    payload: updatedCart,
   })
  }

  // remove from cart

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter((currentProduct) => currentProduct.title !== product.title)
    dispatch({
      type:"REMOVE_FROM_CART",
      payload: updatedCart,
     })
  }


  const value = {products : state.products, 
    addToCart,
    removeFromCart,
     ...state}

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
};
