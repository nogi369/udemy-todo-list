import { List } from "./List";
import { Form } from "./Form";
import { useState } from "react";

export const Todo = () => {
  const TodoList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(TodoList);
  const [inputValue, setInputValue] = useState("");
  // const []

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // 入力値の変更処理
  const keyword = (e) => setInputValue(e.target.value);

  // 正規表現、前方一致検索
  const searchTodo = (keyword) => {
    todos.filter((todo) => {
      const regExp = new RegExp("^" + keyword, "i");
      todo.content.match(regExp);

      console.log(regExp);
    });
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
      <input
        type="text"
        placeholder="Search Keyword"
        value={inputValue}
        onChange={keyword}
      />
      <button onClick={searchTodo}>検索</button>
    </>
  );
};
