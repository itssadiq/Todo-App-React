import React from "react";

const TasksList = ({ todos }) => {
  return (
    <div className="task-list">
      {todos.map((todo) => {
        return (
          <div className="checkbox" key={todo.id}>
            <div>
              <input type="checkbox" />
              <label>{todo.task}</label>
              <p>{todo.dueDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
