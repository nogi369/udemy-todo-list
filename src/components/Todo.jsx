import { List } from "./List"
import { Form } from "./Form"
import { useState } from "react";

export const Todo = () => {
  const todosList = () => [
    {
      id: 1,
      content: "店予約する"
    },
    {
      id: 2,
      content: "卵買う"
    },
    {
      id: 3,
      content: "郵便出す"
    },
  ];

  const [ todos, setTodos ] = useState(todosList);
  
  return (
    <>
    <Form />
    <List todos={todos} />
    </>
  )
}