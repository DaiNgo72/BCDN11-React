import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/color";

export function ChangeColor() {
  const colorReducer = useSelector((store) => store.colorReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="box"
        style={{
          width: 100,
          height: 100,
          backgroundColor: colorReducer.color,
        }}
      />

      <br />

      <button
        onClick={() => {
          dispatch(changeColor("red"));
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          dispatch(changeColor("blue"));
        }}
      >
        blue
      </button>
      <button
        onClick={() => {
          dispatch(changeColor("green"));
        }}
      >
        green
      </button>
    </>
  );
}
