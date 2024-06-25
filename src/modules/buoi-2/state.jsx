import { useState } from "react";

export function State() {
  // let result = useState(0);
  // let [count, setCount] = result;
  const [count, setCount] = useState(0);

  /**
   * B1: Tạo state, có kiểu dữ liệu là gì?
   * B2: Binding data
   * B3: Gắn sự kiện cho button trigger update ui
   */

  const [fz, setFz] = useState(16);

  console.log("re-render", count);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => {
          // count += 1; ❌, Không được thay đổi cập nhật trực tiếp
          setCount(count + 1);

          console.log(count);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);

          console.log(count);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset: 0
      </button>
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        Set 5
      </button>

      <p
        style={{
          fontSize: fz,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
        blanditiis?
      </p>

      <button
        onClick={() => {
          setFz(fz + 2);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setFz(fz - 2);
        }}
      >
        -
      </button>
    </>
  );
}
