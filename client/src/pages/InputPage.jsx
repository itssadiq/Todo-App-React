import { Link } from "react-router-dom";

const InputPage = () => {
  return (
    <div className="main-03">
      <input
        type="text"
        className="task-input"
        placeholder="Write a task..."
        required
      />
      <input type="date" className="task-date" required />
      <input
        type="text"
        className="task-category"
        placeholder="Write Category..."
        required
      />
      <div className="btn-container">
        <button className="add-button">Add</button>
        <Link to="/home">
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default InputPage;
