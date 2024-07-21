import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countSlice",

  // primitive type
  initialState: 88,

  // object type

  reducers: {
    tang: (state, action) => {
      console.log("tang", state, action);

      // return dành cho primitive type
      return state + 1;
    },

    giam: (state) => {
      console.log("tang", state);

      // return dành cho primitive type
      return state - 1;
    },
  },
});

export const countReducer = countSlice.reducer;
