import { useContext, createContext, useReducer, useEffect } from "react";
import { api } from "../Api/APi";
import axios from "axios";
import reducer from "../Reducer/reducer";
const BooksContext = createContext();

export const useBooks = () => {
  return useContext(BooksContext);
};

const initialState = {
  services: [],
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

  return (
    <BooksContext.Provider value={{ ...state}}>
      {children}
    </BooksContext.Provider>
  );
};
