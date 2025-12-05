const TasksList = ({ todos }) => {
  const markCompleted = async (id) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="task-list">
      {todos.map((todo) => {
        return (
          <div className="checkbox" key={todo.id}>
            <div>
              <input
                type="checkbox"
                onClick={() => {
                  markCompleted(todo.id);
                }}
              />
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
