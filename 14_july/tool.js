import React from "react";

const todos = [
  { id: 1, title: "Finish report", description: "Monthly financial report", category: "Work", completed: true },
  { id: 2, title: "Team meeting", description: "Sync with dev team", category: "Work", completed: false },
  { id: 3, title: "Buy groceries", description: "Milk, eggs, and bread", category: "Personal", completed: false },
  { id: 4, title: "Gym", description: "Leg day workout", category: "Personal", completed: true },
  { id: 5, title: "Read book", description: "Finish 'Atomic Habits'", category: "Hobby", completed: false },
  { id: 6, title: "Painting session", description: "Try new watercolor technique", category: "Hobby", completed: true },
];

const TodoList = () => {
  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {todos
              .filter(todo => todo.category === category)
              .map(todo => (
                <li key={todo.id} style={{ marginBottom: "10px" }}>
                  <span>{todo.completed ? "✅" : "❌"} <strong>{todo.title}</strong></span>
                  <br />
                  <span style={{ fontStyle: "italic", fontSize: "0.9em" }}>{todo.description}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
