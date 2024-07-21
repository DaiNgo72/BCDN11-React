import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./count";
import { count2Reducer } from "./count2";
import { search } from "./search";
import { fontSizeReducer } from "./font-size";
import { colorReducer } from "./color";

export const store = configureStore({
  reducer: {
    countReducer: countReducer,

    count2Reducer: count2Reducer,

    todoList: (
      state = {
        todos: [],
        search: "",
        editId: null,
      },
    ) => {
      return state;
    },

    search: search,

    fontSizeReducer,
    colorReducer
  },
});

const useSelector = (cb) => {
  return cb(store);
};
