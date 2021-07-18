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

import { paginate } from "./components";

const reducer = (state, action) => {
  if (action.type === SHOW_EXTRA) {
    return { ...state, extra_menus: true };
  }

  if (action.type === HIDE_EXTRA) {
    return { ...state, extra_menus: false };
  }

  if (action.type === SHOW_LOADING) {
    return { ...state, is_loading: true };
  }

  if (action.type === HIDE_LOADING) {
    return { ...state, is_loading: false };
  }

  if (action.type === GET_DATA_START) {
    return { ...state, is_loading: true };
  }

  if (action.type === GET_DATA_SUCCESS) {
    const pages = paginate(action.payload).map((item) => item);
    console.log(pages);
    return { ...state, is_loading: false, funcionarios: pages };
  }

  if (action.type === GET_SINGLE_DATA_START) {
    return { ...state, is_loading: true };
  }

  if (action.type === GET_SINGLE_DATA_SUCCESS) {
    const { id, cadastro } = action.payload;
    const data = cadastro.find((item) => item.id == id);
    return { ...state, is_loading: false, funcionario: data };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
