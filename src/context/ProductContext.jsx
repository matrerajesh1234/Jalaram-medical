import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";


const AppContext = createContext();

const API = "https://jsonplaceholder.typicode.com/photos";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type:"SET_LOADING"});
    try {
      const res = await axios.get(url);
      const products = await res.data;
  
      dispatch({type:"MY_API_DATA", payload: products});
  
    } catch (error) {
      dispatch({type:"API_ERROR"})
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
};

// Custom hook for Usecontext

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
