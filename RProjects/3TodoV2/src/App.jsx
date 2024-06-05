import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItemsData = [
    {
      Name: "buy Milk",
      DueDate: "12/03/20024",
    },
    {
      Name: "buy onion",
      DueDate: "12/03/20024",
    },
    {
      Name: "buy ginger",
      DueDate: "12/03/20024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItemsData}></TodoItems>
    </center>
  );
}

export default App;
