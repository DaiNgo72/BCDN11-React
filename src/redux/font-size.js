import { createSlice } from "@reduxjs/toolkit";

const fontSizeSlice = createSlice({
  name: "fontSizeSlice",

  // primitive type
  // object type
  initialState: 60,

  reducers: {
    incre: (state) => {
      // immer

      // thay đổi trực tiếp + return về giá trị mới.

      //   return { ...state, data: state.data + 1 };
      return state + 1;
    },
    decre: (state) => {
      return state - 1;
    },
  },
});

export const fontSizeReducer = fontSizeSlice.reducer;

console.log(fontSizeSlice);

export const { decre, incre } = fontSizeSlice.actions;
