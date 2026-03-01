import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = todoName.trim();
    if (!trimmedName) return;
    onAddTodo({
      id: crypto.randomUUID(),
      name: trimmedName,
      date: todoDate || new Date().toISOString().split("T")[0],
    });
    setTodoName("");
    setTodoDate("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter Todo Here"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        aria-label="Todo description"
      />
      <input
        type="date"
        className="todo-date-input"
        value={todoDate}
        onChange={(e) => setTodoDate(e.target.value)}
        aria-label="Due date"
      />
      <button type="submit" className="btn-add">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
