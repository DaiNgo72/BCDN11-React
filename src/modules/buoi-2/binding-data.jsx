/**
 * { <data> }: Binding data lên giao diện.
 *
 * Kiểu dữ liệu có thể binding data:
 * - String
 * - Number
 * - Array
 * - JSX
 *
 * Không hiểu thị:
 * - Boolean
 * - Undefined
 * - Null
 *
 * Lỗi:
 * - Object
 *
 * Binding trực tiếp giá trị lên trên giao diện, không nhất thiết phải thông qua biến.
 *
 * Render với điều kiện
 * - Dùng ternary (toán tử ba ngôi)
 * *Không dùng if else được
 *
 *
 */

import { Header } from "../../header";

export function BindingData() {
  const name = "Nguyen Van B";
  const number = 7;
  const bool = true;
  const product = {
    name: "Sam Sung",
  };
  const arr = [1, 2, 3];
  const und = undefined;
  const nul = null;

  const sayHi = (name) => {
    return `Hi, My name is ${name}`;
  };

  const result = number % 2 === 0 ? "Chẵn" : number > 5 ? "Lẻ" : "None";

  const renderName = () => {
    return (
      <>
        <p>Nguyen Van A</p>
      </>
    );
  };

  return (
    <>
      {renderName()}
      {<Header />}

      {/* Render với điều kiện */}
      <p>{number % 2 === 0 ? "Chẵn" : "Lẻ"}</p>
      <p>{sayHi("Cyber")}</p>
      <h1>{name}</h1>
      <p>{number}</p>
      <p>{arr}</p>

      {/* [boolean | undefined | null] Kiểu dữ liệu không hiển thị lên giao diện */}
      <p>{bool}</p>
      <p>{und}</p>
      <p>{nul}</p>

      {/* [Object] Không thể binding được. Gây lỗi ❌ */}
      {/* <p>{product}</p> */}

      {/* Muốn hiển thị giá trị của Object lên trình duyệt */}
      {/* Object -> String */}
      <p>{JSON.stringify(product)}</p>

      {/* <h2>`${name}`</h2> */}
    </>
  );
}

