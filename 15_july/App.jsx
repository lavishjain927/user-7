import React, { useState } from "react";
import { initialTasks } from "./data/tasks";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggle = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Grouped To-Do List (With State)</h1>
      <TaskList tasks={tasks} onToggle={handleToggle} />
    </div>
  );
};

export default App;
