import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_EXTRA,
  HIDE_EXTRA,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_SINGLE_DATA_START,
  GET_SINGLE_DATA_SUCCESS,
} from "./action";

const initialState = {
  is_loading: false,
  extra_menus: false,
  funcionarios: [],
  funcionario: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showExtra = () => {
    dispatch({ type: SHOW_EXTRA });
  };

  const hideExtra = () => {
    dispatch({ type: HIDE_EXTRA });
  };

  const showLoading = () => {
    dispatch({ type: SHOW_LOADING });
  };

  const hideLoading = () => {
    dispatch({ type: HIDE_LOADING });
  };

  const api = axios.create({
    baseURL: "http://localhost:6060",
  });

  const fetchData = async () => {
    dispatch({ type: GET_DATA_START });
    try {
      const response = await api.get("funcionarios");
      const funcionarios = await response.data;
      dispatch({ type: GET_DATA_SUCCESS, payload: funcionarios });
    } catch (error) {
      console.log("error");
    }
  };

  const fetchSingleData = async (id) => {
    dispatch({ type: GET_SINGLE_DATA_START });
    try {
      const response = await api.get("funcionarios");
      const cadastro = await response.data;
      dispatch({ type: GET_SINGLE_DATA_SUCCESS, payload: { cadastro, id } });
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        showExtra,
        hideExtra,
        hideLoading,
        showLoading,
        fetchData,
        fetchSingleData,
        api,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
