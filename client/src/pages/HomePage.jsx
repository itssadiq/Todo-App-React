import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main-02 js-main-2">
      <div className="date js-date"></div>

      <div className="tasks-buttons">
        <button className="all-task js-all-tasks category-button active">
          All
        </button>
        <button className="completed-tasks js-completed-tasks category-button">
          Completed
        </button>
      </div>

      <div className="flex">
        <p className="category-name js-category-name">All Tasks</p>
      </div>
      <div className="js-task-list task-list"></div>

      <div className="input-div">
        <Link to="/input">
          <input
            type="text"
            placeholder="Write a task..."
            className="task js-task"
          />
        </Link>
        <button className="task-add">Add</button>
      </div>
    </div>
  );
};

export default HomePage;
