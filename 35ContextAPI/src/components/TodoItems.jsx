import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";
const TodoItems = ({ onDeleteClick }) => {
  // const contexObj = useContext(TodoItemsContext);
  // const todoItems = contexObj.todoItems;

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="Items-Container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.DueDate}
          todoName={item.Name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
