// src/App.jsx
import React from 'react';
import TaskManager from './components/TaskManager';

const App = () => {
  return (
    <div className="container">
      <h1>📝 Task Manager App</h1>
      <TaskManager />
    </div>
  );
};

export default App;
