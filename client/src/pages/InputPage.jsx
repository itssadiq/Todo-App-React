import { useState } from "react";
import { Link } from "react-router-dom";

const InputPage = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleTaskInput = (e) => {
    const value = e.target.value;

    setTask(value);
  };

  const handleDateInput = (e) => {
    const value = e.target.value;

    setDate(value);
  };

  const handleCategoryInput = (e) => {
    const value = e.target.value;

    setCategory(value);
  };

  const addToDo = () => {
    console.log(task);
    console.log(date);
    console.log(category);
  };

  return (
    <div className="main-03">
      <input
        type="text"
        className="task-input"
        placeholder="Write a task..."
        onChange={handleTaskInput}
        required
      />
      <input
        type="date"
        className="task-date"
        onChange={handleDateInput}
        required
      />
      <input
        type="text"
        className="task-category"
        placeholder="Write Category..."
        onChange={handleCategoryInput}
        required
      />
      <div className="btn-container">
        <button className="add-button" onClick={addToDo}>
          Add
        </button>
        <Link to="/home">
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default InputPage;
