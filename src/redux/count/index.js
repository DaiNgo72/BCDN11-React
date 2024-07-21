import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  // require
  name: "countSlice",

  // require
  initialState: { count: 100 },

  // require
  reducers: {
    incre: (state) => {
      state.count = state.count + 1;
    },

    decre: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const countReducer = countSlice.reducer;

export const incre = countSlice.actions.incre;
export const decre = countSlice.actions.decre;
