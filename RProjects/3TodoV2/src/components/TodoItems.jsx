import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems }) => {
  return (
    <div className="Items-Container">
      {TodoItems.map((item) => (
        <TodoItem
          key={item.Name}
          todoDate={item.DueDate}
          todoName={item.Name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
