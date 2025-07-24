import React from "react";

const TaskItem = ({ task, onToggle }) => {
  return (
    <div className="task-item">
      <h4>
        {task.completed ? "✅" : "❌"} {task.title}
      </h4>
      <p style={{ fontStyle: "italic", marginLeft: "1rem" }}>
        {task.description}
      </p>
      <button onClick={() => onToggle(task.id)}>Toggle Complete</button>
    </div>
  );
};

export default TaskItem;
