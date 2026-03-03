import { useState } from "react";
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItem from "./Component/TodoItem";
import "./App.css";

const initialTodos = [
  { id: "1", name: "Buy Milk", date: "2026-03-01" },
  { id: "2", name: "Go to College", date: "2026-03-01" },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="todo-app">
      <div className="todo-container">
        <AppName />
        <AddTodo onAddTodo={handleAddTodo} />
        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="todo-empty">No todos yet. Add one above!</li>
          ) : (
            todos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} onDelete={handleDeleteTodo} />
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
