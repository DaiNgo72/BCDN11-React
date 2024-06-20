import { useState } from "react";

import "./change-color.css";


export function ChangeColor() {
  // Biến tĩnh.
  // const bgc = "blue";
  const [bgc, setBgc] = useState("black");

  /**
   * B1: Hiển thị lên trên giao diện với biến tĩnh. (static)
   *
   * B2: Tạo state với kiểu dữ liệu tương ứng với biến tĩnh đó.
   *
   * B3: Gắn xử lý cho button.
   */
  

  return (
    <>
      <div
        className="box"
        style={{
          width: 100,
          height: 100,
          backgroundColor: bgc,
        }}
      />

      <br />

      <button
        onClick={() => {
          setBgc("red");
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setBgc("blue");
        }}
      >
        blue
      </button>
      <button
        onClick={() => {
          setBgc("green");
        }}
      >
        green
      </button>
    </>
  );
}
