import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "colorSlice",

  // primitive type
  // object type
  initialState: {
    color: "blue",
  },

  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const colorReducer = colorSlice.reducer;

export const { changeColor } = colorSlice.actions;
