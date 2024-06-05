import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoitems, setTodoItems] = useState([]);

  const handleNewItem = (itemNames, itemDueDate) => {
    const newTodoItems = [
      ...todoitems,
      { Name: itemNames, DueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.Name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        TodoItems={todoitems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
