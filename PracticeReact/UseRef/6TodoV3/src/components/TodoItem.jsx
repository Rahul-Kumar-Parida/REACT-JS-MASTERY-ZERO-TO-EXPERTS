import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row ">
        <div className="col-6">{todoName}</div>
        <div className="col-2">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-botton"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
