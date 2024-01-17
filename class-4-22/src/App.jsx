import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to the gym from 9-10",
      completed: false,
    },
    {
      title: "Study for math test",
      description: "Read up on vectors and matrices.",
      completed: true,
    },
    {
      title: "im going out",
      description: "okay",
      completed: false,
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "desxc of new todo",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
      {/* <button onClick={onclickHandler}>Counter {count}</button> */}
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}
export default App;
