import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos.reducer";
import { countReducer } from "./count.slice";
import { changeColorReducer } from "./change-color.slice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,

    // countReducer: countReducer,
    countReducer,

    changeColorReducer,
  },
});

const _useSelector = (cb) => {
  return cb(store);
};

