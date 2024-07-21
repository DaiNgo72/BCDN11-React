import { useSelector, useDispatch } from "react-redux";
import { incre, decre } from "../../redux/count";
// useSelector: get
// useDispatch: set
export function Count() {
  const countReducer = useSelector((abc) => {
    return abc.countReducer;
  });

  const count2Reducer = useSelector((def) => {
    return def.count2Reducer;
  });

  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          // gọi hàm incre trên redux
          dispatch(incre());
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          // gọi hàm incre trên redux
          dispatch(decre());
        }}
      >
        -
      </button>
      <h1>Count: {countReducer.count}</h1>
    </>
  );
}

const increCreator = (payload) => {
  return {
    type: "countSlice/incre",
    payload,
  };
};
