import { createSlice } from "@reduxjs/toolkit";

const count2Slice = createSlice({
  name: "count2Slice",

  initialState: 1213,

  reducers: {},
});

export const count2Reducer = count2Slice.reducer;
