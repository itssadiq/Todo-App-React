import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InputPage = ({ fetchTodos }) => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleTaskInput = (e) => {
    const value = e.target.value;

    setTask(value);
  };

  const handleDateInput = (e) => {
    const value = e.target.value;

    setDueDate(value);
  };

  const handleCategoryInput = (e) => {
    const value = e.target.value;

    setCategory(value);
  };

  const addToDo = async () => {
    const newTodo = {
      task,
      dueDate,
      category,
    };

    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    const result = await response.json();
    console.log("server response ==>", result.message);

    await fetchTodos();

    navigate("/home");
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
