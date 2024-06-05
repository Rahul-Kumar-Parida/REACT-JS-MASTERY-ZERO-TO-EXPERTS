import { useState, useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates Are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // onChange={handleDateChange}
            ref={dueDateElement}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-botton"
            onClick={handleAddButtonClicked}
          >
            <MdAddToPhotos />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
