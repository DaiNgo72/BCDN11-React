import { useDispatch, useSelector } from "react-redux";

export function Count() {
  const count = useSelector((store) => {
    return store.countReducer;
  });

  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          const action = {
            type: "countSlice/tang",
          };
          dispatch(action);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "countSlice/giam",
          });
        }}
      >
        -
      </button>

      <h1>Count: {count}</h1>
    </>
  );
}
