import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",

  initialState: "",

  reducers: {},
});

export const search = searchSlice.reducer;

const _createSlice = ({ name, initialState }) => {
  return {
    reducer: (state = initialState) => {
      return state;
    },
  };
};
