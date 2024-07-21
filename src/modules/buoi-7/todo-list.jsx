import { useRef, useState, useEffect } from "react";
import { Todo } from "./todo";
import { getQueryString } from "./utils";

// impure function
// global variable
let valueSearch = "";

export function TodoList() {
  // state
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

  const [countReducer] = useState({
    count: 1,
  });

  /**
   * editID: nếu có id thì chứng tỏ đang edit todo.
   * nếu id = null thì đang trạng thái add.
   */
  const [editID, setEditID] = useState(null);

  // const [isEdit, setIsEdit] = useState(false);

  // useRef giúp biến của chúng ta không bao giờ tạo mới lại khi re-render.
  // const textTodo = useRef("");
  // DOM: trỏ đến một element trên giao diện.
  // ref
  const inputRef = useRef(null);

  // function
  const onDeleteTodo = (event) => {
    const id = +event.currentTarget.dataset.id;

    setTodos((tds) => {
      return tds.filter((t) => t.id !== id);
    });
  };

  const onEditTodo = (event) => {
    // Cập nhật lại ô input
    inputRef.current.value = event.currentTarget.dataset.text;

    // Cập nhật lại editID
    setEditID(+event.currentTarget.dataset.id);
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();

    if (editID) {
      const id = editID;
      const tempValue = inputRef.current.value;

      setTodos((todos) => {
        // lấy Todo cần update
        const todo = todos.find((t) => t.id === id);
        // Tạo todo
        todo.text = tempValue;

        return [...todos];
      });

      // Cập nhật lại editId
      setEditID(null);
    } else {
      const newTodo = new Todo(inputRef.current.value);

      // Cập nhật lại list todo.
      setTodos((c) => [newTodo, ...c]);
    }

    // Focus + reset input.
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  // effect
  // Gọi lần đầu tiên: 1 lần duy nhất.
  useEffect(() => {
    // Khôi phục lại giá trị của ô input
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => resp.json())
      .then((resp) => {
        inputRef.current.value = resp.title;
      });
  }, []);

  // debounce.
  useEffect(() => {
    const idTimeout = setTimeout(() => {
      console.log(search);
    }, 200);
    // 200 > 10ms

    return () => {
      clearTimeout(idTimeout);
    };
  }, [search]);

  // const inputSearchRef = useRef(null);

  useEffect(() => {
    const search = getQueryString("q");

    // console.log("search ...", search);

    // inputSearchRef.current.value = search;

    setSearch(search);
  }, []);

  return (
    <>
      {/* two way binding */}
      <input
        // set
        value={search}
        placeholder="search"
        onChange={(event) => {
          // get
          valueSearch = event.target.value;

          setSearch(event.target.value);
        }}
      />

      <button
        onClick={() => {
          console.log(valueSearch);
        }}
      >
        Click
      </button>

      <hr />

      <form onSubmit={onSubmitTodo}>
        <input ref={inputRef} placeholder="rửa chén" />

        <button type="submit">{editID ? "Save" : "Add"}</button>
      </form>

      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span>{t.text}</span>
              <button data-id={t.id} data-text={t.text} onClick={onEditTodo}>
                Edit
              </button>
              <button data-id={t.id} onClick={onDeleteTodo}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      {/* <Todos id="1" /> */}
    </>
  );
}

// function Todos({ id }) {
//   return (
//     <ul>
//       {todos.map((t) => {
//         return <Todo id={id} />;
//       })}
//     </ul>
//   );
// }

// function Todo() {
//   return (
//     <li key={t.id}>
//       <span>{t.text}</span>
//       <button data-id={t.id} data-text={t.text} onClick={onEditTodo}>
//         Edit
//       </button>
//       <button data-id={t.id} onClick={onDeleteTodo}>
//         Delete
//       </button>
//     </li>
//   );
// }

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
