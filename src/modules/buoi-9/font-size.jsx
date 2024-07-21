import { useDispatch, useSelector } from "react-redux";
import { decre, incre } from "../../redux/font-size";
import { useEffect } from "react";

export function FontSize() {
  const fontSize = useSelector((store) => {
    return store.fontSizeReducer;
  });

  const dispatch = useDispatch();

  return (
    <>
      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
        blanditiis?
      </p>

      <button
        onClick={() => {
          dispatch(incre());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decre());
        }}
      >
        -
      </button>
    </>
  );
}
