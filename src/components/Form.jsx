import { useState } from "react"

export const Form = ({createTodo}) => {
  const [ enteredTodo, setEnteredTodo ] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo =  {
      id: Math.floor( Math.random() * 6 ) + 7,
      content: enteredTodo,
    }
    createTodo(newTodo);

    setEnteredTodo("");
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => {
            setEnteredTodo(e.target.value);
          }}
        />
        <button>追加</button>
      </form>
    </div>
  )
}