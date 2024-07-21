import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColorCreator } from "../../redux/change-color.slice";

export function ChangeColor() {
  const changeColorReducer = useSelector((store) => store.changeColorReducer);
  // useSelector((store) => {
  //   return store.changeColorReducer;
  // });

  console.log(changeColorReducer);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="box"
        style={{
          width: 100,
          height: 100,
          backgroundColor: changeColorReducer.bgc,
        }}
      />

      <br />

      <button
        onClick={() => {
          dispatch(changeColorCreator("red"));
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          dispatch(changeColorCreator("blue"));
        }}
      >
        blue
      </button>
      <button
        onClick={() => {
          dispatch(changeColorCreator("green"));
        }}
      >
        green
      </button>
    </>
  );
}

