import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";
function App() {
  const [todoitems, setTodoItems] = useState([]);

  const addNewItem = (itemNames, itemDueDate) => {
    const newTodoItems = [
      ...todoitems,
      { Name: itemNames, DueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.Name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  // const defaultTodoItems = [{ Name: "Buy Bhee", DueDate: "Today" }];
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoitems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
