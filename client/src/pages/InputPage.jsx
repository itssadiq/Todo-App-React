import React from "react";
import { Link } from "react-router-dom";

const InputPage = () => {
  return (
    <div className="main-03 js-main-3">
      <input
        type="text"
        className="task-input js-task-input"
        placeholder="Write a task..."
        required
      />
      <input type="date" className="task-date js-task-date" required />
      <input
        type="text"
        className="task-category js-task-category"
        placeholder="Write Category..."
        required
      />
      <div className="btn-container">
        <button className="add-button js-add-button">Add</button>
        <Link to="/home">
          <button className="back-button js-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default InputPage;
