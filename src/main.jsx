import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

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
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
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
