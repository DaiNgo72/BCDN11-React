import { useState } from "react";

export function State3() {
  return (
    <>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Count />

        <Count />

        <audio src="" />
      </div>
    </>
  );
}

/**
 * Chỉ được sử dụng useState bên trong function component.
 *
 * ** Chỉ sử dụng hook bên trong function component
 */
// const [c, setC] = useState(0); ❌

/**
 * Mỗi khi component được sử dụng.
 * Sẽ tạo ra những state riêng cho component đó.
 */
function Count() {
  /**
   * State: lưu trữ những trạng thái riêng của component đó.
   *
   * [[ Local State ]].
   */
  const [count, setCount] = useState(() => {
    if (window.innerWidth < 500) {
      return 0;
    }

    return 10;
  });

  // tạo biến count mới có giá trị 1
  /**
   * Mỗi khi gọi hàm setCount thì function sẽ re-render toàn bộ.
   */

  // ---------------------

  console.log("re-render");

  return (
    <>
      <button
        onClick={() => {
          console.log("before", count);

          // setCount là hàm bất đồng bộ

          // Batching Update
          //   setCount(count + 1); //
          //   setCount(count + 1); //
          //   setCount(count + 1); //

          setCount((c) => {
            console.log(c); // 0
            return c + 1; // 0 + 1
          });

          setCount((c) => {
            console.log(c); // 1
            return c + 1; // 1 + 1
          });

          setCount((c) => {
            console.log(c); // 2
            return c + 1; // 2 + 1
          });

          console.log("after", count);
        }}
      >
        {count}
      </button>
    </>
  );
}

const _useState = (initial) => {
  let value = initial;
  // 3

  const setValue = (newValue) => {
    if (typeof newValue === "function") {
      value = newValue(value); // newValue(2)
    } else {
      value = newValue;
    }
  };

  return [value, setValue];
};
