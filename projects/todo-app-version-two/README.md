<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Hooks-useState-purple?style=for-the-badge" alt="Hooks" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

# ✅ Todo App — Version 2

> An improved version of the Todo application with refined component architecture, enhanced styling, and cleaner state management patterns.

---

## 📖 About

Building upon **Version 1**, this iteration introduces a more polished and production-ready todo experience:

- ➕ **Add** new todos with name and due date
- 🗑️ **Delete** individual todos with one click
- 📋 **View** all todos in a beautifully styled list
- 💡 **Empty state** handling with a friendly message
- 🔄 **Immutable state updates** using functional `setState`

---

## ✨ What's New in v2

| Feature | v1 | v2 |
|:--------|:--:|:--:|
| Refined Component Structure | ❌ | ✅ |
| Functional setState Pattern | ❌ | ✅ |
| Improved CSS Styling | ❌ | ✅ |
| Cleaner Code Architecture | ❌ | ✅ |

---

## 🚀 Getting Started

```bash
# Navigate to project directory
cd projects/todo-app-version-two

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📁 Project Structure

```
todo-app-version-two/
├── src/
│   ├── Component/
│   │   ├── AppName.jsx       # App title/header
│   │   ├── AddTodo.jsx       # Form to add new todos
│   │   └── TodoItem.jsx      # Individual todo item with delete
│   ├── App.css               # Enhanced global styles
│   ├── App.jsx               # Root component with state logic
│   ├── assets/
│   │   └── react.svg
│   └── main.jsx
├── public/
│   └── vite.svg
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧠 Concepts Practiced

| Concept | Description |
|:--------|:------------|
| **useState Hook** | Managing dynamic todo list state |
| **Functional Updates** | `setTodos(prev => ...)` for immutable updates |
| **Array Methods** | `.filter()` for delete, `.map()` for rendering |
| **Props & Callbacks** | Parent-child communication via handler props |
| **Conditional Rendering** | Empty state with ternary operator |
| **Component Composition** | `AppName`, `AddTodo`, `TodoItem` working together |

---

## 🔗 Part of [React Practice Repository](https://github.com/mananjani2102/react-practice)
