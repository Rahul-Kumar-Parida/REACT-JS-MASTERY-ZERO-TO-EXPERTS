import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div className="Items-Container">
      {TodoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.DueDate}
          todoName={item.Name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
