export const List = ( {todos} ) => {
  const complete = () => {

  }
  return (
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete()}>完了</button>
            <span>{todo.content}</span>
          </div>
        )
      })}
  </div>
  )
}