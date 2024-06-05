function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-2">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-botton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
