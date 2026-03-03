<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Hooks-useState-purple?style=for-the-badge" alt="Hooks" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

# ✅ Todo App — Version 1

> The first version of a **Todo application** built with React, focusing on state management with `useState`, dynamic list rendering, and CRUD operations.

---

## 📖 About

A functional todo list application where users can:

- ➕ **Add** new todos with a name and due date
- 🗑️ **Delete** todos from the list
- 📋 **View** all todos in a clean, styled list
- 💡 See an **empty state message** when no todos exist

---

## ✨ Features

- 📝 Add todos with name and date fields
- ❌ Delete individual todos
- 🔄 Dynamic list rendering with `.map()` and proper `key` attributes
- 💬 Conditional "No todos yet" empty state message
- 🎨 Custom CSS styling
- ⚡ Blazing-fast Vite dev server

---

## 🚀 Getting Started

```bash
# Navigate to project directory
cd projects/todo-app-version-one

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📁 Project Structure

```
todo-app-version-one/
├── src/
│   ├── Component/
│   │   ├── AppName.jsx       # App title/header
│   │   ├── AddTodo.jsx       # Form to add new todos
│   │   └── TodoItem.jsx      # Individual todo item
│   ├── App.css               # Global styles
│   ├── App.jsx               # Root component with state
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧠 Concepts Practiced

| Concept | Description |
|:--------|:------------|
| **useState Hook** | Managing todo list state |
| **Event Handling** | Add & delete operations |
| **Lifting State Up** | State in `App`, handlers passed via props |
| **Conditional Rendering** | Empty state when no todos |
| **List Rendering** | `.map()` with unique `key` props |
| **Controlled Forms** | Form inputs tied to state |

---

## 🔗 Part of [React Practice Repository](https://github.com/mananjani2102/react-practice)
