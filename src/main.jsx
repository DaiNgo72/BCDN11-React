import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**
 * *Note*:
 * - Khi tạo thẻ tự tạo phải bắt đầu bằng chữ In Hoa, để phân biệt thẻ trong html.
 * - Những thẻ tự tạo còn được gọi là component.
 */

/**
 * React.StrictMode:
 * - Hỗ trợ trong quá trình dev
 * - Performance.
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// const _ReactDOM = {
//   createRoot: (ele) => {
//     return {
//       render: (html) => {
//         ele.innerHTMl = html;
//       },
//     };
//   },
// };
// _ReactDOM.createRoot(document.getElementById("root")).render('<h1>abc</h1>')
