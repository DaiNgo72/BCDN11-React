import { useState } from "react";
import { Todo } from "./todo";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  //
  let textTodo = "";

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            // Lưu giá trị của mỗi lần nhập vào lại
            textTodo = e.target.value;
          }}
          placeholder="rửa chén"
        />
        <button
          onClick={() => {
            //
            console.log({ textTodo });

            // Tạo đối tượng todo mới.
            const newTodo = new Todo(textTodo);

            // Cập nhật lại list todo.
            setTodos((c) => [newTodo, ...c]);
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span>{t.text}</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/**
 * pure function.
 * impure function.
 */

const c = 20;

function sum(a, c, d) {
  let b = 10;

  return a + b + Math.random();
}

sum(3); // 33
sum(3); // 23

sum(3); // 33
sum(3); // 33
sum(3); // 33
sum(3); // 33
