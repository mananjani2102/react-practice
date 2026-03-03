import React from "react";

function TodoItem({ todo, onDelete }) {
  const formattedDate = todo.date
    ? new Date(todo.date + "T12:00:00").toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="todo-item">
      <div className="todo-item-content">
        <span className="todo-name">{todo.name}</span>
        {formattedDate && (
          <span className="todo-date">{formattedDate}</span>
        )}
      </div>
      <button
        type="button"
        className="btn-delete"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
