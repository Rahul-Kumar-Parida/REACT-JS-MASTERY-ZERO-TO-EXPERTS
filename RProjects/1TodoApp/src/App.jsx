import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="Items-Container">
        <Item1></Item1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
