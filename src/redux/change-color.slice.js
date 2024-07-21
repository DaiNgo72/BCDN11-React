import { createSlice } from "@reduxjs/toolkit";

const changeColorSlice = createSlice({
  name: "changeColorSlice",

  initialState: {
    fz: 18,
    bgc: "black",
  },

  reducers: {
    changeColor: (state, action) => {
      // C1: Thay đổi giá trị trực tiếp của state (mutate)
      // immer
      state.bgc = action.payload;

      // C2: dùng return
      //   return {
      //     ...state,
      //     bgc: action.payload,
      //   };
    },

    changeColor2: (state, action) => {
      // C1: Thay đổi giá trị trực tiếp của state (mutate)
      // immer
      state.bgc = action.payload;

      // C2: dùng return
      //   return {
      //     ...state,
      //     bgc: action.payload,
      //   };
    },
  },
});

export const changeColorReducer = changeColorSlice.reducer;

export const changeColorCreator = changeColorSlice.actions.changeColor;

export const changeColor2Creator = changeColorSlice.actions.changeColor2;

export const { changeColor, changeColor2 } = changeColorSlice.actions;
