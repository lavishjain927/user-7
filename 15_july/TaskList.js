import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle }) => {
  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="category-block">
          <h2>{category}</h2>
          {tasks
            .filter((task) => task.category === category)
            .map((task) => (
              <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
