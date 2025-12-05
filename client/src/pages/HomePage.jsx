import { Link } from "react-router-dom";
import DateBox from "../dates/DateBox";
import TasksList from "../components/TasksList";

const HomePage = ({ todos }) => {
  const renderCompletedTasks = () => {
    let completedTasks = [];

    todos.forEach((todo) => {
      if (todo.completed === true) {
        completedTasks.push(todo);
      }
    });

    console.log(completedTasks);
  };
  return (
    <div className="main-02">
      <DateBox />
      <div className="tasks-buttons">
        <button className="all-task category-button active">All</button>
        <button
          className="completed-tasks category-button"
          onClick={renderCompletedTasks}
        >
          Completed
        </button>
      </div>

      <div className="flex">
        <p className="category-name">All Tasks</p>
      </div>
      <TasksList todos={todos} />

      <div className="input-div">
        <Link to="/input">
          <input type="text" placeholder="Write a task..." className="task" />
        </Link>
        <button className="task-add">Add</button>
      </div>
    </div>
  );
};

export default HomePage;
