<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</p>

# 🍎 Learning Fragments — Food Items List

> A React practice project focused on **Fragments**, **Props**, **List Rendering**, and **Conditional Rendering** using a healthy food items list.

---

## 📖 About

This project renders a list of healthy food items using core React patterns. It demonstrates how to:

- Pass data through **props** from parent to child components
- Render dynamic lists using **`.map()`** with proper **keys**
- Show conditional **error/empty messages** based on data
- Use **Bootstrap's list-group** for clean UI styling
- Apply **CSS Modules** for scoped component styles

---

## ✨ Features

- 🥗 Dynamic food items list rendered from an array
- 📦 Reusable `FoodItems`, `Item`, and `ErrorMessage` components
- 🎨 Styled with Bootstrap list-group classes
- ⚡ Conditional rendering for empty states

---

## 🚀 Getting Started

```bash
# Navigate to project directory
cd Fragments/learning-fragment

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📁 Project Structure

```
learning-fragment/
├── src/
│   ├── components/
│   │   ├── FoodItems.jsx         # List container component
│   │   ├── item.jsx              # Individual item component
│   │   ├── item.module.css       # Scoped styles for item
│   │   └── ErrorMessage.jsx      # Conditional error display
│   ├── App.css
│   ├── App.jsx                   # Root component with data
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧠 Concepts Practiced

| Concept | Description |
|:--------|:------------|
| **Props** | Passing `items` array from `App` → `FoodItems` → `Item` |
| **List Rendering** | Using `.map()` to dynamically render list items |
| **Keys** | Assigning unique keys for list performance |
| **Conditional Rendering** | Showing error message when list is empty |
| **CSS Modules** | Scoped styling with `item.module.css` |
| **Fragments** | Understanding React Fragment usage |

---

## 🔗 Part of [React Practice Repository](https://github.com/mananjani2102/react-practice)
