import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { PhoneShop } from "./modules/buoi-5/phone-shop";

const Count = memo(function Count2({ onClick }) {
  let [count, setCount] = useState(0);

  console.log("count");

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
      <button onClick={onClick}></button>
    </>
  );
});

function App() {
  let [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  const [nums, setNums] = useState([1, 2, 3, 4]);
  let arr = []; // Ox1111
  // Ox2222
  // Ox3333

  // useEffect(() => {
  //   console.log("🚀 >>>::::::::: count :::::::::", count);
  // }, [count, like]);
  // 0
  // 1

  useEffect(() => {
    console.log("🚀 >>>::::::::: like :::::::::", like);

    return () => {
      console.log("🚀 >>>::::::::: [cleann up] like  :::::::::", like);
    };
  }, [like]);

  // useEffect(() => {
  //   console.log("🚀 >>>::::::::: array :::::::::");
  // }, [arr]); // 0x1111
  // 0x2222
  // 0x3333

  // Ghi nhớ địa chỉ function.
  const handle = useCallback(() => {
    console.log({ count });
  }, [count]);

  // Ghi nhớ giá trị của biến.
  const total = useMemo(() => {
    return nums.reduce((t, i) => t + i, 0);
  }, [nums]);

  return (
    <>
      <Count onClick={handle} />

      <button onClick={() => setLike(like + 1)}>Like: {like}</button>

      {/* <button
        onClick={() => {
          handle();
        }}
      >
        Click
      </button>

      <button
        onClick={() => {
          setNums([...nums, Math.random()]);
        }}
      >
        {total}
      </button> */}
    </>
  );
}

export default App;

const _useCallback = (cb, dependencies) => {
  return cb;
};

const _useMemo = (cb, dependencies) => {
  return cb();
};
